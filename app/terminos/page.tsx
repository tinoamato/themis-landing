import type { Metadata } from "next";
import Link from "next/link";
import "../html-design.css";

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Themis — Gestión Procesal',
  description: 'Términos y condiciones de uso de la plataforma Themis. Información sobre el servicio de monitoreo procesal automático, agenda y exención de responsabilidades en la República Argentina.',
  alternates: {
    canonical: 'https://themis.com.ar/terminos',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terminos() {
  return (
    <div style={{ background: "var(--warm-white)", minHeight: "100vh", color: "var(--obsidian)", fontFamily: "var(--font-sans)" }}>
      {/* HEADER */}
      <header className="site" style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,249,246,.88)", backdropFilter: "blur(24px) saturate(120%)", borderBottom: "1px solid var(--smoke)" }}>
        <div className="header-inner" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <svg className="brand-mark" width="30" height="30" viewBox="0 0 80 80" fill="none">
              <polygon points="40,12 36,18 44,18" fill="var(--obsidian)"/>
              <line x1="40" y1="18" x2="40" y2="56" stroke="var(--obsidian)" stroke-width="3"/>
              <line x1="18" y1="30" x2="62" y2="30" stroke="var(--obsidian)" stroke-width="3"/>
              <path d="M12,38 Q18,48 24,38" stroke="var(--burgundy)" stroke-width="3.5" fill="none"/>
              <line x1="18" y1="30" x2="12" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <line x1="18" y1="30" x2="24" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <path d="M56,38 Q62,48 68,38" stroke="var(--teal)" stroke-width="3.5" fill="none"/>
              <line x1="62" y1="30" x2="56" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <line x1="62" y1="30" x2="68" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <line x1="30" y1="56" x2="50" y2="56" stroke="var(--obsidian)" stroke-width="3"/>
            </svg>
            <div>
              <div className="brand-name" style={{ fontSize: "16px", letterSpacing: ".2em" }}>Themis</div>
            </div>
          </Link>
          <Link href="/" className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: "12px" }}>
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 300, marginBottom: "8px" }}>
          Términos y <em>Condiciones</em>
        </h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pewter)", marginBottom: "32px", textTransform: "uppercase", letterSpacing: ".08em" }}>
          Última actualización: 26 de julio de 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "15px", lineHeight: "1.75", color: "var(--pewter-dark)" }}>
          <p>
            Le damos la bienvenida a <strong>Themis</strong>. Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma SaaS de gestión de expedientes y agenda judicial. Al registrarse, acceder o utilizar nuestros servicios, usted acepta y se obliga a cumplir con los presentes términos en su totalidad.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            1. Objeto del Servicio
          </h2>
          <p>
            Themis es una plataforma tecnológica que asiste a profesionales del derecho mediante herramientas de consolidación procesal, agenda y monitoreo diario automatizado de expedientes en portales judiciales oficiales (tales como MEV y PJN).
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            2. Uso Responsable y Cuenta de Usuario
          </h2>
          <ul>
            <li>El usuario debe ser un profesional legal habilitado para el ejercicio de la abogacía en su respectiva jurisdicción o actuar bajo la supervisión de uno.</li>
            <li>Las credenciales de acceso a la cuenta de Themis son de carácter personal, confidencial e intransferible. El usuario es responsable de todas las acciones que ocurran bajo su cuenta.</li>
            <li>El usuario se compromete a no utilizar la plataforma para fines ilícitos, engañosos o que violen derechos de terceros o regulaciones oficiales.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            3. Limitación de Responsabilidad (Exclusión de Garantías)
          </h2>
          <p style={{ fontStyle: "italic" }}>
            Por favor, lea con especial atención esta sección, ya que define los límites de nuestra responsabilidad:
          </p>
          <ul>
            <li><strong>Fuentes externas:</strong> El servicio de monitoreo automático provisto por Themis se alimenta directamente de la información pública disponible en los portales oficiales de la Mesa de Entradas Virtual (MEV), el Poder Judicial de la Nación (PJN) u otras jurisdicciones. Themis no controla, modifica ni es responsable de la exactitud, veracidad o disponibilidad de dichos portales externos.</li>
            <li><strong>Obligación de control profesional:</strong> El monitoreo automático y la agenda que provee Themis son herramientas complementarias de asistencia y organización. Bajo ningún concepto reemplazan la responsabilidad profesional, legal y ética que recae sobre el abogado matriculado de controlar sus propios expedientes, plazos y notificaciones directamente ante los estrados judiciales.</li>
            <li><strong>Fallas técnicas:</strong> Themis no se responsabiliza por la pérdida de plazos o demoras procesales resultantes de caídas temporales de los portales judiciales oficiales, inexactitudes en la carga pública de datos por parte de los juzgados, o problemas de conexión ajenos a la infraestructura directa del software.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            4. Suscripciones, Facturación y Cancelación
          </h2>
          <p>
            El uso de las funciones avanzadas de Themis está sujeto al pago de una tarifa de suscripción periódica conforme al plan cotizado. Los cargos se realizarán por adelantado y de forma recurrente. El usuario puede solicitar la baja del servicio o la modificación del plan en cualquier momento, lo cual entrará en vigencia al finalizar el periodo de facturación en curso.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            5. Modificación de los Términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento para reflejar cambios en la legislación o en las características de la plataforma. La continuación en el uso del servicio posterior a la publicación de dichas modificaciones constituye la aceptación expresa de los nuevos términos.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            6. Ley Aplicable y Jurisdicción
          </h2>
          <p>
            Estos términos se rigen e interpretan bajo las leyes vigentes de la República Argentina. Cualquier disputa o controversia relacionada con el uso de la plataforma será sometida a la jurisdicción de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción.
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--smoke)", padding: "32px 24px", textAlign: "center", fontSize: "12px", color: "var(--pewter)" }}>
        <p>© 2026 Themis · Buenos Aires, Argentina</p>
      </footer>
    </div>
  );
}
