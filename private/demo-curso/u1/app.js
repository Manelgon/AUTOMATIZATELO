/* Automatizatelo · motor de unidad · SCORM 1.2
   Idéntico para todas las unidades. Todo lo que cambia de una a otra vive en
   contenido.js (window.AFC_UNIDAD), vimeo-config.js y tutor-audio-config.js.
   Los vídeos se alojan en Vimeo, nunca dentro del ZIP. */
(function () {
  'use strict';

  var U = window.AFC_UNIDAD;
  if (!U) { document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Falta <code>contenido.js</code>: esta unidad no tiene contenido cargado.</p>'; return; }

  var sections = U.sections;
  var screens = U.screens;
  var TEXTOS = U.resultados || {};
  var APROBADO = U.aprobado || 70;
  var STORE = 'afc-' + U.id;

  // Las claves de evaluación y los vídeos se deducen del contenido: una unidad
  // nueva no tiene que declararlos, y no pueden quedar desincronizados.
  function clavesCon(prefijo) { return screens.filter(function(s){return s.key && s.key.indexOf(prefijo)===0;}).map(function(s){return s.key;}); }
  var initialKeys = clavesCon('initial-');
  var finalKeys = clavesCon('final-');
  var videoKeys = screens.filter(function(s){return s.type==='video';}).map(function(s){return s.videoKey;});
  // La competencia son las actividades y el test; la prueba de nivel no puntua,
  // solo situa al alumno. Todas las preguntas valen lo mismo.
  var competenciaKeys = screens.filter(function(s){return (s.type==='quiz'||s.type==='match') && s.key && s.key.indexOf('initial-')!==0;}).map(function(s){return s.key;});
  // Cada pregunta vale un entero y entre todas suman 100 exactos: el resto de
  // la division se reparte entre las primeras. Por eso pueden convivir un +15%
  // y un +14% en el mismo test, y el desglose siempre cuadra con el total.
  var VALORES = (function(){ var total=competenciaKeys.length; if(!total) return {};
    var base=Math.floor(100/total), resto=100-base*total, tabla={};
    competenciaKeys.forEach(function(k,i){ tabla[k]=base+(i<resto?1:0); }); return tabla; })();
  function valorDe(key) { return VALORES[key]||0; }

  var api = null;
  var PROGRESS_MODEL_VERSION = 2;
  var READ_DELAY_MS = 1500;
  // Dos niveles de error, como en los cursos de referencia: al primer fallo el
  // alumno puede repensar sin que se le ensene la solucion; al agotar los
  // intentos se resuelve, se explica y la pregunta queda cerrada.
  var INTENTOS_POR_DEFECTO = 2;
  var PESO_INTENTO = [1, 0.7, 0.5];   // valor que conserva la respuesta segun el intento en que se acierta
  var state = { progressModelVersion:PROGRESS_MODEL_VERSION, screen:0, videos:{}, answers:{}, interactions:{}, visited:{}, glosario:false };
  videoKeys.forEach(function(key){ state.videos[key] = false; });
  var current = 0;
  var vimeoPlayer = null;
  var tutorAudio = null;
  var readReadyTimer = null;

  function findApi(win) { var tries=0; while (win && !win.API && win.parent && win.parent !== win && tries++ < 500) win=win.parent; return win && win.API ? win.API : null; }
  function getApi() { if (api) return api; api=findApi(window.parent); if (!api && window.opener) api=findApi(window.opener); return api; }
  function scormInit() { var a=getApi(); try { return !!(a && a.LMSInitialize('')); } catch(e) { return false; } }
  function scormGet(key) { var a=getApi(); try { return a ? (a.LMSGetValue(key)||'') : ''; } catch(e) { return ''; } }
  function scormSet(key,value) { var a=getApi(); try { if(a) a.LMSSetValue(key,String(value)); } catch(e) {} }
  function scormCommit() { var a=getApi(); try { if(a) a.LMSCommit(''); } catch(e) {} }
  function esc(value) { return String(value).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];}); }
  function saveState() { state.screen=current; var payload=JSON.stringify(state); scormSet('cmi.suspend_data',payload); scormSet('cmi.core.lesson_location',current); scormCommit(); try { localStorage.setItem(STORE,payload); } catch(e) {} }
  function loadState() { var saved=scormGet('cmi.suspend_data'),resetLegacyProgress=false; if (!saved) { try { saved=localStorage.getItem(STORE); } catch(e) {} } try { var parsed=JSON.parse(saved); if(parsed && typeof parsed==='object') { var oldProgressModel=parsed.progressModelVersion!==PROGRESS_MODEL_VERSION; state=Object.assign(state,parsed); if(oldProgressModel) { state.visited={}; resetLegacyProgress=true; } } } catch(e) {} if(!state.interactions||typeof state.interactions!=='object') state.interactions={}; if(!state.visited||typeof state.visited!=='object') state.visited={}; if(!state.videos||typeof state.videos!=='object') state.videos={}; if(!state.answers||typeof state.answers!=='object') state.answers={}; if(typeof state.glosario!=='boolean') state.glosario=false; Object.keys(state.answers).forEach(function(k){var a=state.answers[k]; if(a&&typeof a==='object'&&typeof a.intento!=='number'){a.intento=1;a.agotado=true;}}); videoKeys.forEach(function(key){ if(typeof state.videos[key]!=='boolean') state.videos[key]=false; }); state.progressModelVersion=PROGRESS_MODEL_VERSION; if(resetLegacyProgress){scormSet('cmi.core.lesson_status','incomplete');scormCommit();} current=Math.max(0,Math.min(Number(state.screen)||0,screens.length-1)); current=Math.min(current,maxUnlocked()); }
  function interactionKeys(item) { var keys=[]; (item.explorables||[]).forEach(function(_,index){keys.push('explore-'+index);}); (item.reveals||[]).forEach(function(_,index){keys.push('reveal-'+index);}); return keys; }
  function interactionStateKey(index,key) { return index+':'+key; }
  function isInteractionComplete(key) { return !!state.interactions[interactionStateKey(current,key)]; }
  function screenCanAdvance(index) { var item=screens[index], required=interactionKeys(item); if(item.type==='video') return !!state.videos[item.videoKey]; if(item.type==='quiz'||item.type==='match') return cerrada(item.key); if(required.length) return required.every(function(key){return !!state.interactions[interactionStateKey(index,key)];}); return !!state.visited[index]; }
  function isReadingScreen(index) { var item=screens[index]; return item.type!=='video'&&item.type!=='quiz'&&item.type!=='match'&&!interactionKeys(item).length; }
  function canRequestAdvance(index) { return screenCanAdvance(index)||isReadingScreen(index)&&!document.getElementById('next').dataset.reading; }
  function maxUnlocked() { var limit=0; for(var index=0;index<screens.length-1;index++){if(!screenCanAdvance(index)) break;limit=index+1;} return limit; }
  function canAdvance() { return screenCanAdvance(current); }
  function sectionFor(index) { var selected=sections[0]; sections.forEach(function(section){ if(index>=section.start) selected=section; }); return selected; }
  function showToast(message) { var toast=document.getElementById('toast'); toast.textContent=message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer=window.setTimeout(function(){toast.classList.remove('show');},3000); }

  function sectionIsComplete(sectionIndex) { var start=sections[sectionIndex].start,end=sectionIndex<sections.length-1?sections[sectionIndex+1].start-1:screens.length-1; for(var index=start;index<=end;index++){if(!screenCanAdvance(index)) return false;} return true; }
  function renderNav() { var nav=document.getElementById('section-nav'); nav.innerHTML=sections.map(function(section,index){ var active=sectionFor(current).title===section.title; var complete=sectionIsComplete(index)?' complete':''; return '<button class="'+(active?'active':'')+complete+'" type="button" data-start="'+section.start+'">'+esc(section.title)+'</button>'; }).join(''); nav.querySelectorAll('button').forEach(function(button){button.addEventListener('click',function(){goTo(Number(button.dataset.start));});}); }
  function renderCommon(item) { return '<div class="screen-intro"><div class="overline">'+esc(item.overline||item.section||'')+'</div><h2>'+item.title+'</h2>'+(item.lead?'<p class="lead">'+esc(item.lead)+'</p>':'')+'</div>'; }
  function renderContent(item) { var intro=renderCommon(item), html=item.visual?'<div class="scene-layout"><div>'+intro+'</div>'+renderLessonVisual(item.visual)+'</div>':intro; if(item.type==='cover') html+='<img class="cover-logo" src="assets/logo.png" alt="Automatizatelo" style="max-width:140px">'; if(item.body) html+=item.body.map(function(p){return '<p>'+esc(p)+'</p>';}).join(''); if(item.bullets) html+='<ul>'+item.bullets.map(function(p){return '<li>'+esc(p)+'</li>';}).join('')+'</ul>'; if(item.explorables) html+=renderExplorables(item.explorables); if(item.cards) html+='<div class="feature-grid">'+item.cards.map(function(card){return '<section class="feature-card"><span class="icon">'+esc(card[0])+'</span><h3>'+esc(card[1])+'</h3><p>'+esc(card[2])+'</p></section>';}).join('')+'</div>'; if(item.reveals) html+=renderReveals(item.reveals); if(item.explorables||item.reveals) html+=renderInteractionProgress(item); if(item.callout) html+=callout(item.callout); if(item.type==='cover') html+=ayudaPortada(); return html; }
  function ayudaPortada() { return '<p class="portada-ayuda"><button type="button" id="abre-consejos">'+ICONO_CONSEJOS+' ¿Cómo funciona esta unidad?</button><span>Opcional · un minuto</span></p>'; }
  function callout(item) { return '<aside class="callout'+(item.variant?' '+item.variant:'')+'"><div class="callout-label">'+esc(item.label)+'</div><p>'+esc(item.text)+'</p></aside>'; }
  function renderLessonVisual(item) { return '<figure class="lesson-illustration"><img src="'+esc(item.src)+'" alt="'+esc(item.alt)+'"></figure>'; }
  function renderExplorables(items) { var panelId='explore-'+current; return '<section class="explorable" aria-label="Conceptos para explorar"><p class="explorable-hint">Pulsa cada concepto para abrir su explicación. Todos son necesarios para continuar.</p><div class="explore-actions">'+items.map(function(item,index){var done=isInteractionComplete('explore-'+index);return '<button type="button" class="explore-button'+(done?' complete':'')+'" data-explore="'+index+'" data-audio="'+esc(item.audioId||'')+'">'+esc(item.label)+'<span aria-hidden="true">'+(done?'✓':'+')+'</span></button>';}).join('')+'</div><div id="'+panelId+'" class="explore-panel" hidden></div></section>'; }
  function renderReveals(items) { return '<div class="reveal-stack">'+items.map(function(item,index){var panelId='reveal-'+current+'-'+index,done=isInteractionComplete('reveal-'+index);return '<section class="knowledge"><button class="knowledge-trigger'+(done?' complete':'')+'" type="button" aria-expanded="false" aria-controls="'+panelId+'" data-reveal="'+index+'" data-audio="'+esc(item.audioId||'')+'">'+esc(item.label)+'<span aria-hidden="true">'+(done?'✓':'+')+'</span></button><div id="'+panelId+'" class="knowledge-panel" hidden><h3>'+esc(item.title)+'</h3><p>'+esc(item.text)+'</p></div></section>';}).join('')+'</div>'; }
  var ICONO_MANO = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M15 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a5 5 0 0 1-4.2-2.3l-2.2-3.4a1.5 1.5 0 0 1 2.3-1.9L9 14"/></svg>';
  // La mano avisa de un vistazo: aqui hay elementos que hay que abrir. Es el
  // aviso que mas se agradece, porque si no el boton Siguiente parece roto.
  function renderInteractionProgress(item) { var required=interactionKeys(item),done=required.filter(isInteractionComplete).length,ready=done===required.length; return '<div class="interaccion-aviso"><span class="mano" title="Esta pantalla tiene elementos interactivos">'+ICONO_MANO+'</span><p id="interaction-progress" class="interaction-progress'+(ready?' ready':'')+'" aria-live="polite">'+(ready?'✓ Contenido interactivo revisado. Ya puedes continuar.':'Te falta explorar '+(required.length-done)+' de '+required.length+' elemento'+(required.length===1?'':'s')+' para continuar.')+'</p></div>'; }
  function renderQuiz(item) { var saved=state.answers[item.key]; var html=renderCommon(item)+'<div class="quiz" data-key="'+esc(item.key)+'"><p class="question">'+esc(item.question)+'</p>'+item.options.map(function(option,index){var checked=saved && saved.answer===index?' checked':'';return '<label class="option"><input type="radio" name="'+esc(item.key)+'" value="'+index+'"'+checked+'><span>'+esc(option)+'</span></label>';}).join('')+'<button class="check-button" type="button">Comprobar</button><div class="feedback" aria-live="polite"></div>'+renderMarcador(item)+'</div>'; return html; }
  function renderMatch(item) { var options=item.items.map(function(row){return row[1];}).filter(function(v,i,a){return a.indexOf(v)===i;}); var etiqueta=item.selectLabel||'Elige la opción que corresponde'; var html=renderCommon(item)+'<div class="quiz matching" data-key="'+esc(item.key)+'">'; item.items.forEach(function(row){html+='<div class="matching-row" data-correct="'+esc(row[1])+'"><div>'+esc(row[0])+'</div><select aria-label="'+esc(etiqueta)+'"><option value="">— Seleccionar —</option>'+options.map(function(opt){return '<option value="'+esc(opt)+'">'+esc(opt)+'</option>';}).join('')+'</select></div>';}); return html+'<button class="check-button" type="button">Comprobar actividad</button><div class="feedback" aria-live="polite"></div>'+renderMarcador(item)+'</div>'; }
  function renderTable(item) { return renderCommon(item)+'<table class="data-table"><thead><tr>'+item.headers.map(function(h){return '<th>'+esc(h)+'</th>';}).join('')+'</tr></thead><tbody>'+item.rows.map(function(row){return '<tr>'+row.map(function(cell){return '<td>'+esc(cell)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table>'; }
  function renderKeys(item) { return renderCommon(item)+'<div class="key-list">'+item.items.map(function(text){return '<div class="key-item">'+esc(text)+'</div>';}).join('')+'</div>'; }
  // La prueba de nivel no puntua: es diagnostica y va a un solo intento, para
  // que el alumno conteste lo que cree y siga. Los reintentos son de lo evaluable.
  function intentosDe(item) { if(item.key && item.key.indexOf('initial-')===0) return 1;
    return Math.max(1, Math.min(item.intentos||INTENTOS_POR_DEFECTO, PESO_INTENTO.length)); }
  function pesoIntento(numero) { return PESO_INTENTO[Math.min(Math.max(numero,1),PESO_INTENTO.length)-1]; }
  function cerrada(key) { var a=state.answers[key]; return !!(a&&(a.correct||a.agotado)); }
  function competenciaDe(key) { var a=state.answers[key]; return a&&a.correct ? Math.round(valorDe(key)*pesoIntento(a.intento||1)) : 0; }
  function competenciaTotal() { return competenciaKeys.reduce(function(t,k){return t+competenciaDe(k);},0); }
  function pct(valor) { return Math.round(valor)+'%'; }
  function renderMarcador(item) {
    if(competenciaKeys.indexOf(item.key)===-1) return '';
    var maximo=intentosDe(item), a=state.answers[item.key], hechos=a?(a.intento||1):0, pips='';
    for(var i=1;i<=maximo;i++){
      var acierto = !!(a&&a.correct&&a.intento===i), pendiente = hechos<i;
      var clase = pendiente?'pendiente':(acierto?'acierto':'fallo');
      var valor = pendiente?'':(acierto?'+'+pct(valorDe(item.key)*pesoIntento(i)):'+0%');
      pips+='<span class="pip '+clase+'"><b>'+valor+'</b><i>'+(pendiente?i:(acierto?'✓':'✗'))+'</i></span>';
    }
    return '<div class="marcador"><div class="pips" aria-label="Intentos de esta actividad">'+pips+'</div>'
      +'<p class="marcador-nota">Vale '+pct(valorDe(item.key))+' de la competencia. A la primera vale entera; después, menos.</p></div>';
  }
  function aciertos(keys) { return keys.reduce(function(total,key){return total+(state.answers[key]&&state.answers[key].correct?1:0);},0); }
  function renderInitialResult(item) { var t=TEXTOS.inicial||{}, total=initialKeys.length, score=aciertos(initialKeys); var text=score===total?(t.alto||'Partes con una base sólida.'):(t.bajo||'Tienes una buena intuición de partida. La unidad te ayudará a convertirla en criterio práctico.'); return renderCommon(item)+'<section class="final-score"><div class="result-label">Resultado</div><div class="score-big">'+score+' / '+total+'</div><p>'+esc(text)+'</p></section>'; }
  function renderFinalResult(item) { var t=TEXTOS.final||{}, total=finalKeys.length, attempted=finalKeys.filter(function(key){return state.answers[key];}), score=aciertos(finalKeys); var text=attempted.length<total?(t.pendiente||'Completa las '+total+' preguntas para obtener el resultado final.'):score===total?(t.alto||'Has completado la unidad con el criterio adquirido.'):score>=Math.ceil(total*0.6)?(t.medio||'Vas bien. Repasa los bloques donde has fallado antes de continuar.'):(t.bajo||'Repasa las ideas clave y vuelve a intentarlo.'); return renderCommon(item)+'<section class="final-score"><div class="result-label">Resultado</div><div class="score-big">'+score+' / '+total+'</div><p>'+esc(text)+'</p><p class="final-competencia">Competencia acumulada en toda la unidad: <b>'+pct(competenciaTotal())+'</b>. Se supera con '+APROBADO+'%. La tienes desglosada en <b>Progreso</b>, en el índice.</p></section>'; }
  function renderCompletion(item) { return '<section class="completion"><div class="overline">'+esc(item.overline)+'</div><h2>'+item.title+'</h2>'+item.body.map(function(p){return '<p>'+esc(p)+'</p>';}).join('')+'</section>'+'<section class="mapa-cierre"><h3 class="titulo-mapa">Tu mapa de la unidad</h3>'+pintaProgreso()+'</section>'; }
  function renderVideo(item) { return renderCommon(item)+(item.body?item.body.map(function(p){return '<p>'+esc(p)+'</p>';}).join(''):'')+'<section class="video-panel"><div id="vimeo-slot" class="video-wrap"></div><p id="video-status" class="video-status">Debes ver el vídeo completo para continuar.</p></section><p class="video-note">El vídeo se reproduce desde Vimeo. El progreso de la unidad se guarda en Evolcampus.</p>'; }

  function renderScreen() {
    var item=screens[current], screen=document.getElementById('screen');
    if(tutorAudio) tutorAudio.pause();
    window.clearTimeout(readReadyTimer);
    var html='';
    if(item.type==='cover'||item.type==='content') html=renderContent(item);
    else if(item.type==='quiz') html=renderQuiz(item);
    else if(item.type==='match') html=renderMatch(item);
    else if(item.type==='table') html=renderTable(item);
    else if(item.type==='keys') html=renderKeys(item);
    else if(item.type==='initial-result') html=renderInitialResult(item);
    else if(item.type==='final-result') html=renderFinalResult(item);
    else if(item.type==='completion') html=renderCompletion(item);
    else if(item.type==='video') html=renderVideo(item);
    screen.classList.remove('is-entering');
    screen.innerHTML=html;
    void screen.offsetWidth;
    screen.classList.add('is-entering');
    document.getElementById('crumb').textContent=item.section;
    document.getElementById('step-count').textContent='Pantalla '+(current+1)+' de '+screens.length;
    document.getElementById('screen-position').textContent=(current+1)+' / '+screens.length;
    document.getElementById('progress-fill').style.width=((current+1)/screens.length*100)+'%';
    document.getElementById('prev').disabled=current===0;
    var next=document.getElementById('next'); next.dataset.reading=''; next.disabled=!canRequestAdvance(current); next.textContent=current===screens.length-1?'Finalizar unidad':'Siguiente →';
    if(isReadingScreen(current)&&!screenCanAdvance(current)){next.dataset.reading='true';next.disabled=true;readReadyTimer=window.setTimeout(function(){if(current===Number(screen.dataset.index)){next.dataset.reading='';next.disabled=false;}},READ_DELAY_MS);}
    screen.dataset.index=current;
    var puerta=document.getElementById('abre-consejos'); if(puerta) puerta.addEventListener('click',function(){abreAnexo('consejos');});
    if(item.explorables) bindExplorables(item.explorables); if(item.reveals) bindReveals(); if(item.type==='quiz') bindQuiz(item); if(item.type==='match') bindMatch(item); if(item.type==='video') mountVimeo(item);
    renderNav(); saveState(); window.scrollTo({top:0,behavior:'smooth'});
    if(item.type==='completion') completeCourse();
  }
  // --- anexos de la unidad: glosario y recursos, dentro del propio paquete ---
  function agrupaGlosario(entradas) { var grupos=[{t:'A – C',r:/^[A-Ca-c]/},{t:'D – G',r:/^[D-Gd-g]/},{t:'H – L',r:/^[H-Lh-l]/},{t:'M – O',r:/^[M-Om-o]/},{t:'P – R',r:/^[P-Rp-r]/},{t:'S – Z',r:/^[S-Zs-z]/}]; var orden=entradas.slice().sort(function(a,b){return a.termino.localeCompare(b.termino,'es');}); return grupos.map(function(g){ return {titulo:g.t, items:orden.filter(function(e){return g.r.test(e.termino);})}; }).filter(function(g){return g.items.length;}); }
  function pintaGlosario() { var entradas=U.glosario||[]; if(!entradas.length) return '<p class="pendiente">El glosario de esta unidad todavía no está redactado.</p>'; return agrupaGlosario(entradas).map(function(g){ return '<h3>'+esc(g.titulo)+'</h3><dl>'+g.items.map(function(e){ return '<dt>'+esc(e.termino)+'</dt><dd>'+esc(e.definicion)+'</dd>'; }).join('')+'</dl>'; }).join(''); }
  function pintaRecursos() { var bloques=U.recursos||[]; if(!bloques.length) return '<p class="pendiente">Los recursos de esta unidad todavía no están preparados.</p>'; return bloques.map(function(b){ return '<h3>'+esc(b.titulo)+'</h3><ul>'+b.items.map(function(i){ var texto='<strong>'+esc(i.nombre)+'</strong>'+(i.detalle?' — '+esc(i.detalle):''); return '<li>'+(i.enlace?'<a href="'+esc(i.enlace)+'" target="_blank" rel="noopener">'+texto+'</a>':texto)+(i.pendiente?' <span class="pendiente">(pendiente de entrega)</span>':'')+'</li>'; }).join('')+'</ul>'; }).join(''); }
  var ICONO_PROGRESO = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9h-9z" fill="currentColor" stroke="none"/></svg>';
  var ICONO_CONSEJOS = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.3 2.2c-.6.3-1 .9-1 1.6v.4"/><circle cx="11.9" cy="16.6" r=".9" fill="currentColor" stroke="none"/></svg>';

  // --- mapa de progreso y logros -------------------------------------------
  // Dos medidores a proposito distintos: el PROGRESO es cuanto has recorrido y
  // la COMPETENCIA cuanto has acertado. Se puede llegar al 100% de progreso con
  // el 40% de competencia, y el alumno tiene que poder verlo.
  function medidor(titulo, valor, pie) {
    return '<div class="medidor"><div class="aro" style="--v:'+valor+'"><span>'+valor+'%</span></div>'
      + '<strong>'+esc(titulo)+'</strong><small>'+esc(pie)+'</small></div>';
  }
  function filaMapa(titulo, valor, clase) {
    return '<div class="mapa-fila"><span>'+esc(titulo)+'</span><b'+(clase?' class="'+clase+'"':'')+'>'+esc(valor)+'</b></div>';
  }
  function pintaProgreso() {
    var total=screens.length, vistas=0, i;
    for(i=0;i<total;i++) if(state.visited[i]) vistas++;
    var vids=videoKeys.filter(function(k){return state.videos[k];}).length;
    var cerradas=competenciaKeys.filter(cerrada).length;
    var html='<div class="mapa-medidores">'
      + medidor('Progreso de la unidad', Math.round(vistas/total*100), 'Pantallas que ya has visto')
      + medidor('Competencia adquirida', competenciaTotal(), 'Se supera la unidad con '+APROBADO+'%')
      + '</div>';
    html+='<h3>Recorrido</h3>'
      + filaMapa('Pantallas visitadas', vistas+' de '+total)
      + filaMapa('Pantallas pendientes', String(total-vistas))
      + (videoKeys.length?filaMapa('Vídeos vistos enteros', vids+' de '+videoKeys.length):'')
      + filaMapa('Glosario consultado', state.glosario?'Sí':'Todavía no', state.glosario?'si':'no');
    if(!competenciaKeys.length) return html;
    html+='<h3>Actividades y test</h3>'
      + filaMapa('Preguntas cerradas', cerradas+' de '+competenciaKeys.length)
      + filaMapa('Cada pregunta vale', (function(){ var vs=competenciaKeys.map(valorDe), min=Math.min.apply(null,vs), max=Math.max.apply(null,vs);
          return (min===max?pct(min):pct(min)+' o '+pct(max))+' de la competencia'; })());
    html+='<ol class="mapa-preguntas">'+competenciaKeys.map(function(k){
      var pantalla=null;
      screens.forEach(function(x){ if(x.key===k) pantalla=x; });
      var a=state.answers[k];
      var clase=a?(a.correct?'acierto':(a.agotado?'fallo':'encurso')):'pendiente';
      var valor=a?(a.correct?'+'+pct(competenciaDe(k)):(a.agotado?'+0%':'a medias')):'sin hacer';
      var nombre=(pantalla&&(pantalla.overline||pantalla.section))||'Pregunta';
      return '<li class="'+clase+'"><span>'+esc(nombre)+'</span><b>'+esc(valor)+'</b></li>';
    }).join('')+'</ol>';
    return html;
  }

  // --- consejos: como funciona la unidad ------------------------------------
  // Opcional, y accesible en todo momento y no solo al principio: quien se
  // pierde lo hace en la pantalla 20, no en la 2.
  // Cada consejo enseña el elemento del que habla, montado con los componentes
  // de verdad del motor: si algun dia cambia el aspecto de un boton, el ejemplo
  // cambia con el y no se queda mintiendo.
  var CONSEJOS = [
    { t:'La barra de arriba a la derecha',
      p:'Arriba a la derecha, junto al número de pantalla, está todo lo que puedes consultar en cualquier momento: los recursos y el glosario de la unidad, el círculo que abre tu mapa de progreso y competencia, y el interrogante, que abre esta misma ayuda.',
      ej:'<div class="ej-cabecera"><span class="step-count">Pantalla 8 de 35</span><span class="topbar-acciones"><button type="button" class="texto" data-anexo="recursos">Recursos</button><button type="button" class="texto" data-anexo="glosario">Glosario</button><button type="button" class="icono" data-anexo="progreso">'+ICONO_PROGRESO+'</button><button type="button" class="icono" data-anexo="consejos">'+ICONO_CONSEJOS+'</button></span></div>' },
    { t:'Cómo se avanza',
      p:'Para pasar de pantalla tienes que haber visto todo lo que hay en la que estás, incluido lo que se abre al pulsar. Si el botón Siguiente está apagado, es que aquí te falta algo.',
      ej:'<div class="ej-fila"><button class="button button-primary" type="button" disabled>Siguiente →</button><span class="ej-nota">te falta algo</span></div>'
        +'<div class="ej-fila"><button class="button button-primary" type="button">Siguiente →</button><span class="ej-nota">ya puedes pasar</span></div>' },
    { t:'Lo que hay que abrir',
      p:'Las tarjetas y los botones con un + guardan contenido dentro. Ábrelos: cuentan para poder continuar, y debajo te vamos diciendo cuántos te faltan.',
      ej:'<div class="explore-actions"><span class="explore-button">Sin abrir <span>+</span></span><span class="explore-button complete">Ya abierto <span>✓</span></span></div>'
        +'<p class="interaction-progress">Te falta explorar 1 de 2 elementos para continuar.</p>' },
    { t:'Los vídeos',
      p:'Un vídeo cuenta cuando termina. Si lo dejas a medias, el botón Siguiente no se activa. Puedes verlo a pantalla completa.',
      ej:'<div class="ej-oscuro"><p class="video-status">Debes ver el vídeo completo para continuar.</p><p class="video-status ready">✓ Vídeo completado. Ya puedes continuar.</p></div>' },
    { t:'El índice',
      p:'A la izquierda están las secciones de la unidad. Puedes volver a cualquier pantalla que ya hayas visto; hacia delante no, porque cada una se apoya en la anterior.',
      ej:'<div class="ej-oscuro ej-indice"><span class="ej-seccion complete">2. Una sección ya vista</span><span class="ej-seccion">3. Una sección por llegar</span></div>' },
    { t:'Glosario y Recursos',
      p:'Arriba a la derecha, a la izquierda de los dos iconos, y siempre a la vista aunque cierres el índice. El glosario define los términos que van saliendo; en recursos tienes los enlaces y los documentos de la unidad. Pruébalos aquí mismo:',
      ej:'<div class="ej-cabecera"><span class="topbar-acciones"><button type="button" class="texto" data-anexo="recursos">Recursos</button><button type="button" class="texto" data-anexo="glosario">Glosario</button></span></div>' },
    { t:'Los intentos',
      p:'Cada actividad tiene dos intentos. Si fallas el primero te lo decimos, pero no te enseñamos la respuesta: puedes pensarlo otra vez. Al agotar los intentos se resuelve y se explica.',
      ej:'<div class="marcador"><div class="pips"><span class="pip fallo"><b>+0%</b><i>✗</i></span><span class="pip acierto"><b>+11%</b><i>✓</i></span></div>'
        +'<p class="marcador-nota">Fallado el primero, acertado el segundo: se conserva el 70 %.</p></div>' },
    { t:'Progreso y competencia',
      p:'Son dos cosas distintas. El progreso es cuánto has recorrido; la competencia, cuánto has acertado. Acertar a la primera vale la pregunta entera; a la segunda, el 70 %. Lo tienes desglosado en el icono de progreso, arriba a la derecha.',
      ej:'<div class="ej-medidores"><span class="ej-medidor"><span class="aro chico" style="--v:100"><span>100%</span></span>progreso</span>'
        +'<span class="ej-medidor"><span class="aro chico" style="--v:78"><span>78%</span></span>competencia</span></div>' },
    { t:'No hace falta terminar de una vez',
      p:'La unidad recuerda por dónde ibas. Puedes cerrar y volver más tarde: seguirás donde lo dejaste.',
      ej:'<div class="ej-oscuro"><span class="ej-guardado"><span class="dot"></span> Progreso guardado</span></div>' }
  ];
  function audioConsejo(id) { return (window.AFC_CONSEJOS_AUDIO&&window.AFC_CONSEJOS_AUDIO[id]) || (window.AFC_TUTOR_AUDIO&&window.AFC_TUTOR_AUDIO[id]); }
  function pintaConsejos() {
    return '<p class="consejos-intro">Nada de esto es obligatorio: son ocho apuntes sobre cómo funciona el reproductor, con un ejemplo de cada cosa. Puedes volver aquí siempre que quieras.</p>'
      + '<ol class="consejos">'+CONSEJOS.map(function(c,i){
          var id='consejo-'+(i+1);
          return '<li><h4>'+esc(c.t)+(audioConsejo(id)?'<button type="button" class="consejo-audio" data-audio="'+id+'">Escuchar</button>':'')+'</h4>'
            +'<p>'+esc(c.p)+'</p>'+(c.ej?'<div class="ej">'+c.ej+'</div>':'')+'</li>';
        }).join('')+'</ol>';
  }
  function bindConsejos() {
    document.querySelectorAll('.consejo-audio').forEach(function(b){ b.addEventListener('click',function(){ playTutorAudio(b.dataset.audio); }); });
    // los botones de ejemplo de glosario y recursos funcionan de verdad
    document.querySelectorAll('.consejos [data-anexo]').forEach(function(b){ b.addEventListener('click',function(){ abreAnexo(b.dataset.anexo); }); });
  }
  var ANEXOS = { glosario:['Glosario de la unidad',pintaGlosario], recursos:['Recursos de la unidad',pintaRecursos], progreso:['Tu progreso y tu competencia',pintaProgreso], consejos:['Cómo funciona esta unidad',pintaConsejos] };
  function abreAnexo(cual) { var def=ANEXOS[cual]; if(!def) return; var caja=document.getElementById('anexo');
    if(cual==='glosario'&&!state.glosario){ state.glosario=true; saveState(); }
    document.getElementById('anexo-titulo').textContent=def[0];
    document.getElementById('anexo-cuerpo').innerHTML=def[1]();
    caja.hidden=false; caja.dataset.anexo=cual; document.getElementById('anexo-cuerpo').scrollTop=0;
    if(cual==='consejos') bindConsejos();
    document.getElementById('anexo-cerrar').focus(); }
  function cierraAnexo() { document.getElementById('anexo').hidden=true; if(tutorAudio) tutorAudio.pause(); }
  function renderAnexos() { // Los cuatro accesos van en la CABECERA, no en el indice. El indice es el
    // temario; esto son consultas de media pantalla. Y sobre todo: por debajo de
    // 860 px el indice se esconde tras la hamburguesa, asi que ahi abajo el
    // glosario y los recursos dejaban de existir.
    var arriba=document.getElementById('topbar-acciones');
    if(arriba) arriba.innerHTML='<button type="button" class="texto" data-anexo="recursos">Recursos</button><button type="button" class="texto" data-anexo="glosario">Glosario</button><button type="button" class="icono" data-anexo="progreso" title="Tu progreso y tu competencia" aria-label="Tu progreso y tu competencia">'+ICONO_PROGRESO+'</button><button type="button" class="icono" data-anexo="consejos" title="Cómo funciona esta unidad" aria-label="Cómo funciona esta unidad">'+ICONO_CONSEJOS+'</button>';
    if(arriba) arriba.querySelectorAll('button').forEach(function(b){ b.addEventListener('click',function(){abreAnexo(b.dataset.anexo);}); }); document.getElementById('anexo-cerrar').addEventListener('click',cierraAnexo); document.getElementById('anexo').addEventListener('click',function(e){ if(e.target.id==='anexo') cierraAnexo(); }); document.addEventListener('keydown',function(e){ if(e.key==='Escape') cierraAnexo(); }); }

  function playTutorAudio(id) { var source=(window.AFC_CONSEJOS_AUDIO&&window.AFC_CONSEJOS_AUDIO[id])||(window.AFC_TUTOR_AUDIO&&window.AFC_TUTOR_AUDIO[id]); if(!source) return; if(tutorAudio) tutorAudio.pause(); tutorAudio=new Audio(source); tutorAudio.play().catch(function(){}); }
  function animateOpen(panel) { panel.classList.remove('panel-opening'); void panel.offsetWidth; panel.classList.add('panel-opening'); }
  function updateInteractionProgress() { var item=screens[current],progress=document.getElementById('interaction-progress'),required=interactionKeys(item),done=required.filter(isInteractionComplete).length,ready=done===required.length;if(progress){progress.classList.toggle('ready',ready);progress.textContent=ready?'✓ Contenido interactivo revisado. Ya puedes continuar.':'Te falta explorar '+(required.length-done)+' de '+required.length+' elemento'+(required.length===1?'':'s')+' para continuar.';} document.getElementById('next').disabled=!screenCanAdvance(current); }
  function completeInteraction(key) { state.interactions[interactionStateKey(current,key)]=true; saveState(); updateInteractionProgress(); renderNav(); }
  function bindExplorables(items) { var panel=document.querySelector('.explore-panel'); document.querySelectorAll('.explore-button').forEach(function(button){button.addEventListener('click',function(){var item=items[Number(button.dataset.explore)],key='explore-'+button.dataset.explore; panel.hidden=false;panel.innerHTML='<button type="button" class="panel-close" aria-label="Cerrar explicación">×</button><h3>'+esc(item.title)+'</h3><p>'+esc(item.text)+'</p>';animateOpen(panel); completeInteraction(key);button.classList.add('complete');button.querySelector('span').textContent='✓';document.querySelectorAll('.explore-button').forEach(function(other){other.classList.toggle('selected',other===button);}); panel.querySelector('.panel-close').addEventListener('click',function(){panel.hidden=true;panel.classList.remove('panel-opening');button.classList.remove('selected');if(tutorAudio) tutorAudio.pause();});playTutorAudio(button.dataset.audio);});}); }
  function bindReveals() { document.querySelectorAll('.knowledge-trigger').forEach(function(button){button.addEventListener('click',function(){var panel=document.getElementById(button.getAttribute('aria-controls')),open=button.getAttribute('aria-expanded')==='true',key='reveal-'+button.dataset.reveal;button.setAttribute('aria-expanded',String(!open));panel.hidden=open;if(open){panel.classList.remove('panel-opening');button.querySelector('span').textContent=isInteractionComplete(key)?'✓':'+';if(tutorAudio) tutorAudio.pause();}else{completeInteraction(key);button.classList.add('complete');button.querySelector('span').textContent='−';animateOpen(panel);playTutorAudio(button.dataset.audio);}});}); }
  function bindQuiz(item) {
    var box=document.querySelector('.quiz'), boton=box.querySelector('.check-button'), maximo=intentosDe(item);
    function pinta(a) {
      var resuelta=a.correct||a.agotado;
      box.querySelectorAll('.option').forEach(function(option,index){ option.classList.toggle('correct',resuelta&&index===item.correct); option.classList.toggle('incorrect',index===a.answer&&!a.correct); });
      box.querySelector('.feedback').textContent = a.correct ? ('Correcto. '+item.explanation)
        : a.agotado ? ('Incorrecto. '+item.explanation)
        : 'Aún no. Te queda otro intento: vuelve a leer la pregunta y prueba otra vez.';
      if(resuelta){ boton.disabled=true; box.querySelectorAll('input').forEach(function(radio){radio.disabled=true;}); }
      var marcador=box.querySelector('.marcador'); if(marcador) marcador.outerHTML=renderMarcador(item);
    }
    if(state.answers[item.key]) pinta(state.answers[item.key]);
    boton.addEventListener('click',function(){
      if(cerrada(item.key)) return;
      var selected=box.querySelector('input:checked');
      if(!selected){showToast('Selecciona una respuesta antes de comprobar.');return;}
      var answer=Number(selected.value), correct=answer===item.correct;
      var intento=((state.answers[item.key]||{}).intento||0)+1;
      var a={answer:answer,correct:correct,intento:intento,agotado:correct||intento>=maximo};
      state.answers[item.key]=a; pinta(a);
      if(!a.agotado) selected.checked=false;
      updateScore(); saveState();
      document.getElementById('next').disabled=!canAdvance(); renderNav();
    });
  }
  function bindMatch(item) { var box=document.querySelector('.matching'); box.querySelector('.check-button').addEventListener('click',function(){var complete=true, correctCount=0; box.querySelectorAll('.matching-row').forEach(function(row){var select=row.querySelector('select'), correct=select.value===row.dataset.correct; if(!select.value) complete=false; row.classList.toggle('correct',correct);row.classList.toggle('incorrect',!!select.value&&!correct);if(correct) correctCount++;}); if(!complete){showToast('Completa todas las relaciones antes de comprobar.');return;} var total=item.items.length, todo=correctCount===total; var intento=((state.answers[item.key]||{}).intento||0)+1, maximo=intentosDe(item), agotado=todo||intento>=maximo; state.answers[item.key]={correct:todo,score:correctCount,intento:intento,agotado:agotado}; box.querySelector('.feedback').textContent=todo?'Actividad superada. Has relacionado correctamente los '+total+' enunciados.':agotado?'Has acertado '+correctCount+' de '+total+'. Quedan marcadas en verde las que estaban bien.':'Has acertado '+correctCount+' de '+total+'. Te queda otro intento: revisa las filas marcadas en rojo.'; if(agotado){box.querySelector('.check-button').disabled=true;box.querySelectorAll('select').forEach(function(sel){sel.disabled=true;});} var marcador=box.querySelector('.marcador'); if(marcador) marcador.outerHTML=renderMarcador(item); updateScore(); saveState();document.getElementById('next').disabled=!canAdvance();renderNav(); }); }
  function loadVimeoApi() { if(window.Vimeo) return Promise.resolve(); if(window.__afcVimeoApi) return window.__afcVimeoApi; window.__afcVimeoApi=new Promise(function(resolve,reject){var script=document.createElement('script');script.src='https://player.vimeo.com/api/player.js';script.onload=resolve;script.onerror=reject;document.head.appendChild(script);}); return window.__afcVimeoApi; }
  function mountVimeo(item) { var cfg=window.AFC_VIMEO&&window.AFC_VIMEO[item.videoKey], slot=document.getElementById('vimeo-slot'), status=document.getElementById('video-status'); if(!cfg||!cfg.id){slot.innerHTML='<div class="video-placeholder"><div class="video-icon">▶</div><strong>Vídeo pendiente de publicar en Vimeo</strong><p>Introduce el identificador de “'+esc((cfg&&cfg.title)||item.videoKey)+'” en <code>vimeo-config.js</code> y vuelve a crear el ZIP.</p></div>';status.textContent='El avance se habilitará automáticamente cuando el vídeo esté publicado y se reproduzca completo.';return;} var query='dnt=1&title=0&byline=0&portrait=0&loop=0'; if(cfg.hash) query='h='+encodeURIComponent(cfg.hash)+'&'+query; slot.innerHTML='<iframe id="vimeo-player" src="https://player.vimeo.com/video/'+encodeURIComponent(cfg.id)+'?'+query+'" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="'+esc(cfg.title)+'"></iframe>'; loadVimeoApi().then(function(){vimeoPlayer=new window.Vimeo.Player(document.getElementById('vimeo-player')); vimeoPlayer.on('ended',function(){state.videos[item.videoKey]=true;status.textContent='✓ Vídeo completado. Ya puedes continuar.';status.classList.add('ready');document.getElementById('next').disabled=false;saveState();renderNav();showToast('Vídeo completado. Puedes continuar.');}); if(state.videos[item.videoKey]){status.textContent='✓ Vídeo ya completado.';status.classList.add('ready');document.getElementById('next').disabled=false;}}).catch(function(){status.textContent='No se ha podido cargar Vimeo. Comprueba la conexión, el identificador y el dominio autorizado.';}); }
  // La nota que viaja al campus es la COMPETENCIA: actividades y test juntos,
  // ponderados por el intento en que se acerto. Se manda en cuanto hay algo que
  // mandar, y el veredicto passed/failed solo cuando estan todas cerradas.
  function updateScore() { if(!competenciaKeys.length) return; var raw=competenciaTotal(); scormSet('cmi.core.score.raw',raw);scormSet('cmi.core.score.min','0');scormSet('cmi.core.score.max','100'); if(competenciaKeys.every(cerrada)) scormSet('cmi.core.lesson_status',raw>=APROBADO?'passed':'failed'); scormCommit(); }
  function completeCourse() { updateScore(); scormSet('cmi.core.lesson_status','completed');scormCommit(); }
  function goTo(index) { var limit=maxUnlocked(); if(index>limit){showToast('Antes debes completar las pantallas e interacciones anteriores.');index=limit;} current=Math.max(0,Math.min(index,screens.length-1));renderScreen(); }
  function updateMenuToggle() { var compact=window.matchMedia('(max-width:860px)').matches, shell=document.querySelector('.course-shell'), menu=document.querySelector('.course-menu'), button=document.getElementById('menu-toggle'), expanded=compact?menu.classList.contains('open'):!shell.classList.contains('menu-collapsed');button.setAttribute('aria-expanded',String(expanded));button.setAttribute('aria-label',expanded?'Ocultar índice':'Mostrar índice');button.textContent=expanded?'×':'☰'; }
  function toggleMenu() { var compact=window.matchMedia('(max-width:860px)').matches, shell=document.querySelector('.course-shell'), menu=document.querySelector('.course-menu'); if(compact){menu.classList.toggle('open');}else{shell.classList.toggle('menu-collapsed');try{localStorage.setItem(STORE+'-menu',String(shell.classList.contains('menu-collapsed')));}catch(e){}} updateMenuToggle(); }
  function pintaIdentidad() { document.title=U.titulo+' · Automatizatelo'; var h1=document.querySelector('.course-menu h1'); if(h1) h1.textContent=U.titulo; var eyebrow=document.querySelector('.topbar .eyebrow'); if(eyebrow) eyebrow.textContent=U.eyebrow||'Automatizatelo'; var meta=document.querySelector('meta[name="description"]'); if(meta) meta.setAttribute('content','Automatizatelo · '+U.titulo+'.'); }
  function init() { pintaIdentidad();renderAnexos();scormInit();loadState();try{if(localStorage.getItem(STORE+'-menu')==='true')document.querySelector('.course-shell').classList.add('menu-collapsed');}catch(e){}document.getElementById('prev').addEventListener('click',function(){goTo(current-1);});document.getElementById('next').addEventListener('click',function(){if(!canRequestAdvance(current)){showToast('Espera un momento o completa la interacción antes de continuar.');return;}if(isReadingScreen(current)&&!screenCanAdvance(current)){state.visited[current]=true;saveState();renderNav();}goTo(current+1);});document.getElementById('menu-toggle').addEventListener('click',toggleMenu);window.addEventListener('resize',updateMenuToggle);window.addEventListener('beforeunload',function(){saveState();var a=getApi();try{if(a)a.LMSFinish('');}catch(e){}});updateMenuToggle();renderScreen(); }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
