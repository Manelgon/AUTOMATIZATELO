/** Un bloque de datos estructurados en el HTML servido. */
export default function Esquema({ datos }: { datos: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
        />
    );
}
