# Catálogo de Formaciones · Automatizatelo

*Documento de trabajo interno · 4 de agosto de 2026*
*Arquitectura: 1 tronco común + 4 módulos por audiencia. Es lo que exige el Art. 4 (proporcionalidad al rol) convertido en producto.*

---

## 0. El principio que ordena todo el catálogo

**No hay "un curso para empresas" y "otro para docentes": hay UN tronco común de alfabetización y un módulo específico por audiencia.**

Ventajas:
- **Legal**: el Art. 4 pide formación proporcional al rol y al riesgo — la estructura tronco+módulo ES la proporcionalidad hecha temario (y queda justificada en el registro formativo).
- **De producción**: el tronco se crea una vez y sirve para todos los clientes. Cada módulo son 2-4 horas de contenido nuevo, no un curso entero.
- **Comercial**: cada página de la web (empresas, despachos, centros, directivos) vende "su" formación, pero por detrás es el mismo motor.
- **SCORM**: el tronco se empaqueta una vez; los módulos se añaden como unidades. Un solo producto e-learning, cuatro versiones.

```
        ┌─────────────────────────────────────────┐
        │   A0 · TRONCO COMÚN (4 h)               │
        │   Alfabetización en IA — Art. 4         │
        └───────────────┬─────────────────────────┘
        ┌────────┬──────┴───────┬─────────────┐
        │ M1     │ M2           │ M3          │ M4
        │ Pymes  │ Docentes     │ Despachos   │ Dirección
        │ (2-4h) │ (2-4h)       │ (2-4h)      │ (2-4h)
```

---

## 1. A0 · Tronco común: «Alfabetización en IA» (4 horas)

*Para toda la plantilla, de cualquier sector. Es el mínimo que cubre el Art. 4.*

**Objetivo**: que cualquier persona de la organización entienda qué es la IA, qué puede y no puede hacer, cómo usarla sin poner en riesgo a la empresa, y qué dice la ley.

| # | Unidad | Contenido | Duración |
|---|---|---|---|
| U1 | Qué es (y qué no es) la IA | IA vs automatización clásica · cómo "piensa" un modelo de lenguaje · por qué acierta tanto y se equivoca con total seguridad en sí mismo (alucinaciones) · demo en vivo con casos del cliente | 45' |
| U2 | Usarla bien: el método | Anatomía de una buena petición (rol, tarea, contexto, tono, límite) · iterar en vez de rendirse · práctica guiada con tareas reales de los asistentes | 60' |
| U3 | Los riesgos que pagan caro | Datos personales y confidenciales: qué NUNCA se pega en un chat · anonimizar antes de preguntar · cuentas personales vs cuentas de empresa · propiedad intelectual y contenido generado | 45' |
| U4 | La ley, sin jerga | El Reglamento Europeo de IA en 20 minutos: qué prohíbe, qué es alto riesgo, qué exige transparencia · el Art. 4 y por qué están hoy aquí sentados · qué pasa desde agosto de 2026 | 30' |
| U5 | Las reglas de casa | La política de uso de IA de SU empresa (se imparte sobre el documento real del cliente si existe — venta cruzada con el pack de auditoría) · a quién preguntar · cómo pedir una herramienta nueva | 30' |
| U6 | Cierre práctico | Cada asistente identifica 3 tareas suyas donde aplicar lo aprendido esta semana · test corto de aprovechamiento (queda como evidencia) | 30' |

**Evidencia que genera**: test de aprovechamiento + certificado nominal + fila en el registro formativo (plantillas ya creadas en `docs/politicas-producto/registro-formativo-art4.md`).

---

## 2. Módulos por audiencia (2-4 h cada uno)

### M1 · Pymes y oficina — «La IA en tu puesto»
*El complemento del tronco para empresas de servicios, comercios, operaciones.*
- Casos de uso por rol: administración (emails, resúmenes, documentos), comercial (propuestas, seguimientos), atención al cliente (respuestas, tono).
- Plantillas de prompts de la empresa: se construyen EN CLASE con sus casos reales — cada equipo sale con su biblioteca.
- Tareas programadas y asistentes a medida: qué puede quedarse funcionando solo.
- Mini-taller final por departamentos.

### M2 · Docentes y claustros — «La IA en el aula»
*Para colegios, institutos y FP (vende la página de centros educativos).*
- Preparar clases con IA: programaciones, rúbricas, adaptaciones por niveles, materiales.
- El elefante: alumnos que entregan trabajos hechos con IA — por qué prohibir no funciona y cómo rediseñar tareas y evaluación.
- La política de uso del centro: qué pueden hacer docentes y alumnos (sobre el documento del centro).
- Menores y datos: la sensibilidad extra que exige el entorno educativo.

### M3 · Despachos profesionales — «La IA con secreto profesional»
*Para administradores de fincas, gestorías, asesorías (tu nicho).*
- Los casos del despacho: comunicaciones, actas desde notas, resúmenes de documentación y normativa (se trabaja con el pack de 10 prompts ya publicado en /recursos).
- El módulo crítico: datos de clientes — qué herramientas y planes dan garantías, anonimización sistemática, qué no sale del despacho jamás.
- Trazabilidad: documentar qué se hizo con IA cuando el trabajo tiene efectos legales.

### M4 · Dirección — «Gobernar la IA» (formato ejecutivo, ½ día con tronco comprimido)
*Para gerencia y comités (vende la página de directivos). No hace el tronco entero: lleva una versión comprimida de U1+U4 integrada.*
- El mapa real de oportunidades en SU empresa, con órdenes de magnitud de coste.
- Obligaciones y riesgos: qué firma dirección y qué debe poder demostrar.
- Gobernanza: quién aprueba herramientas, quién responde, cómo se mide el retorno.
- Salida: plan de decisión priorizado (documento).

---

## 3. Cómo se mapea a lo que la web ya vende

| Producto en la web | Composición | Precio publicado |
|---|---|---|
| Alfabetización Art. 4 (4-8 h) | A0 solo (4 h) o A0 + módulo (8 h) | desde 600 € |
| Taller intensivo (1 día, 8 h) | A0 + módulo + práctica extendida por equipos | 900–1.400 € |
| Programa in-company (16 h / 4 sem) | A0 + módulo + 2 sesiones de aplicación real con deberes entre medias + sesión de cierre | desde 2.400 € |
| Sesión ejecutiva directivos | M4 (con tronco comprimido) | desde 600 € |
| Programa dirección | M4 + segunda sesión + plan de gobernanza documentado | desde 1.200 € |
| Curso SCORM | A0 (+ módulo elegido) empaquetado, con test y registro | desde 1.900 € |
| White-label entidades | El SCORM anterior con la marca del cliente | desde 1.900 €/curso |

*Todo cuadra con /precios sin tocar una cifra.*

## 4. Orden de producción recomendado

1. **A0 tronco común** — el motor de todo. Guion + diapositivas + ejercicios + test. *Es lo primero y lo único urgente: con A0 ya puedes impartir "alfabetización Art. 4" que es lo que la auditoría promete.*
2. **M3 despachos** — tu nicho más fuerte y con materiales ya a medio hacer (el pack de prompts de fincas de /recursos ES el material práctico de M3).
3. **M4 dirección** — poco contenido nuevo (mucho sale del informe de auditoría) y ticket alto.
4. **M1 pymes** — generalización de lo que ya enseñas.
5. **M2 docentes** — cuando llegue el primer centro interesado (no antes: regla de no producir sin demanda).
6. **Versión SCORM de A0** — cuando A0 esté rodado en vivo 2-3 veces (así el curso graba lo que funciona, no lo que parecía buena idea).

## 5. Materiales por crear (checklist de producción de A0)

- [ ] Guion de impartición (por unidad, con tiempos)
- [ ] Diapositivas maestras (plantilla Automatizatelo)
- [ ] Cuaderno del asistente (ejercicios U2, U3 y U6)
- [ ] Test de aprovechamiento (10 preguntas, corrección automática si es online)
- [ ] Demo preparada de U1 (con plan B sin internet)
- [ ] Los 3 documentos de evidencia ya existen: certificado, registro, justificación de proporcionalidad ✅
