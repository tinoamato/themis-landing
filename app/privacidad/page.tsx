"use client";

import Link from "next/link";
import "../html-design.css";

export default function Privacidad() {
  return (
    <div style={{ background: "var(--warm-white)", minHeight: "100vh", color: "var(--obsidian)", fontFamily: "var(--font-sans)" }}>
      {/* HEADER */}
      <header className="site" style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,249,246,.88)", backdropFilter: "blur(24px) saturate(120%)", borderBottom: "1px solid var(--smoke)" }}>
        <div className="header-inner" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" className="brand">
            <svg className="brand-mark" width="30" height="30" viewBox="0 0 80 80" fill="none">
              <polygon points="40,12 36,18 44,18" fill="var(--obsidian)"/>
              <line x1="40" y1="18" x2="40" y2="56" stroke="var(--obsidian)" strokeWidth="3"/>
              <line x1="18" y1="30" x2="62" y2="30" stroke="var(--obsidian)" strokeWidth="3"/>
              <path d="M12,38 Q18,48 24,38" stroke="var(--burgundy)" strokeWidth="3.5" fill="none"/>
              <line x1="18" y1="30" x2="12" y2="38" stroke="var(--obsidian)" strokeWidth="2.5"/>
              <line x1="18" y1="30" x2="24" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <path d="M56,38 Q62,48 68,38" stroke="var(--teal)" strokeWidth="3.5" fill="none"/>
              <line x1="62" y1="30" x2="56" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <line x1="62" y1="30" x2="68" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
              <line x1="30" y1="56" x2="50" y2="56" stroke="var(--obsidian)" strokeWidth="3"/>
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
          Política de <em>Privacidad</em>
        </h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pewter)", marginBottom: "32px", textTransform: "uppercase", letterSpacing: ".08em" }}>
          Última actualización: 26 de julio de 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", fontSize: "15px", lineHeight: "1.75", color: "var(--pewter-dark)" }}>
          <p>
            En <strong>Themis</strong> nos tomamos muy en serio la privacidad y la protección de los datos de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal y los datos procesales en el marco de la legislación aplicable en la República Argentina (Ley N° 25.326 de Protección de Datos Personales).
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            1. Información que Recopilamos
          </h2>
          <p>
            Para brindar el servicio de monitoreo y gestión procesal, recolectamos la siguiente información:
          </p>
          <ul>
            <li><strong>Datos de registro de usuario:</strong> Nombre completo, dirección de correo electrónico, número de teléfono y datos del estudio jurídico.</li>
            <li><strong>Datos de consulta judicial:</strong> Los números de expediente, carátulas y juzgados que el usuario asocia a su panel para el seguimiento automatizado.</li>
            <li><strong>Credenciales de portales de consulta:</strong> En caso de ser necesario para el acceso a consultas personalizadas de los portales MEV o PJN, el usuario podrá ingresar de forma voluntaria sus credenciales. Esta información se almacena con altos estándares de encriptación y se utiliza únicamente para las sincronizaciones automáticas del sistema.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            2. Uso de la Información
          </h2>
          <p>
            Utilizamos los datos recopilados exclusivamente para las siguientes finalidades:
          </p>
          <ul>
            <li>Proveer, mantener y optimizar el servicio de consulta judicial diaria.</li>
            <li>Generar la agenda integrada de vencimientos y compromisos del día.</li>
            <li>Enviar alertas internas de la plataforma y notificaciones en panel de movimientos nuevos.</li>
            <li>Responder a solicitudes de soporte, consultas y gestionar la facturación del servicio.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            3. Almacenamiento y Seguridad de los Datos
          </h2>
          <p>
            La seguridad de su información es nuestra prioridad. Todos los datos, especialmente las credenciales de acceso judicial y la información sensible de sus expedientes, se procesan y transmiten utilizando protocolos encriptados (SSL/TLS) y se resguardan bajo estrictas medidas de seguridad técnica y organizativa para evitar su alteración, pérdida o acceso no autorizado.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            4. No Divulgación a Terceros
          </h2>
          <p>
            <strong>Themis</strong> no vende, alquila ni comparte bajo ningún concepto la información personal ni los datos de los expedientes de sus usuarios con terceros ajenos al servicio, excepto bajo requerimiento legal de autoridades judiciales competentes.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            5. Derechos de Acceso, Rectificación y Supresión (ARCO)
          </h2>
          <p>
            De conformidad con la Ley N° 25.326, los usuarios tienen derecho a solicitar el acceso, actualización, rectificación o eliminación de sus datos personales almacenados en nuestras bases de datos. Para ejercer estos derechos, puede comunicarse directamente con nosotros enviando un correo electrónico a <a href="mailto:contacto@themis.com.ar" style={{ color: "var(--burgundy)", textDecoration: "underline" }}>contacto@themis.com.ar</a>.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--obsidian)", marginTop: "16px" }}>
            6. Cambios en la Política de Privacidad
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier cambio significativo será notificado en esta sección o mediante correo electrónico directo antes de su entrada en vigencia.
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
