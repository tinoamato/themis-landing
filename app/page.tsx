"use client";

import { useEffect } from "react";
import "./html-design.css";

const HTML_BODY = `
<div class="grain"></div>

<!-- HEADER -->
<header class="site">
  <div class="header-inner">
    <a href="#" class="brand">
      <svg class="brand-mark" width="30" height="30" viewBox="0 0 80 80" fill="none">
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
        <div class="brand-name">Themis</div>
        <div class="brand-sub">Gestión procesal · AR</div>
      </div>
    </a>
    <nav class="primary">
      <a href="#dashboard">Producto</a>
      <a href="#anatomy">Cómo funciona</a>
      <a href="#consultas">Casos de uso</a>
      <a href="#testimonios">Testimonios</a>
      <a href="#precios">Precios</a>
    </nav>
    <div class="header-cta">
      <a href="#" class="btn btn-ghost">Ingresar</a>
      <a href="https://wa.me/5491131838472?text=Hola%2C%20me%20interesa%20solicitar%20una%20demo%20de%20Themis." target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Solicitar demo
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-meta">
    <div class="hero-meta-left">
      <span class="vol">Vol. I — 2026</span>
      <span>EDICIÓN Nº 042</span>
      <span>BUENOS AIRES</span>
    </div>
    <div class="hero-meta-right">
      <span>MIÉ 22 · ABR · 2026</span>
      <span class="pipe">|</span>
      <span>MEV sincronizado 09:42</span>
    </div>
  </div>

  <div class="hero-grid">
    <div class="hero-left">
      <div class="hero-kicker">Software para estudios jurídicos</div>
      <h1 class="hero-title">
        El orden<br>
        que su estudio<br>
        <em>merece.</em>
      </h1>

      <div class="hero-rule">
        <span>§ Legal SaaS</span>
        <span class="line"></span>
        <span>MEV · PJN · Agenda</span>
      </div>

      <p class="hero-lede">
        Themis anticipa plazos, monitorea cada expediente y profesionaliza la gestión — sin que usted abra un portal judicial nunca más.
      </p>

      <p class="hero-body hero-dropcap">
        Diseñado para estudios que facturan tiempo y no pueden permitirse perderlo. La plataforma sincroniza MEV y PJN cada 15 minutos, ordena vencimientos por urgencia real y genera reportes que sus clientes sí quieren leer. Todo desde un solo dashboard.
      </p>

      <div class="hero-actions">
        <a href="https://wa.me/5491131838472?text=Hola%2C%20vi%20la%20web%20de%20Themis%20y%20me%20gustar%C3%ADa%20solicitar%20una%20demo." target="_blank" rel="noopener noreferrer" class="btn btn-primary accent lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Solicitar demo por WhatsApp
        </a>
        <a href="#" class="btn btn-ghost lg">Ver producto en vivo →</a>
      </div>

      <div class="hero-trust">
        <div class="hero-trust-item">
          <span class="hero-trust-value">14 días</span>
          <span class="hero-trust-label">Prueba gratuita</span>
        </div>
        <div class="hero-trust-item">
          <span class="hero-trust-value">24 h</span>
          <span class="hero-trust-label">Setup completo</span>
        </div>
        <div class="hero-trust-item">
          <span class="hero-trust-value">0</span>
          <span class="hero-trust-label">Plazos perdidos</span>
        </div>
      </div>
    </div>

    <div class="hero-right" id="dashboard">
      <div class="hero-right-caption">Dashboard — demo en tiempo real</div>
      <div class="browser">
        <div class="browser-chrome">
          <div class="dots"><i></i><i></i><i></i></div>
          <div class="url">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            app.themis.legal/expedientes
          </div>
        </div>
        <div class="browser-body">
          <aside class="side">
            <div class="side-title">Estudio Álvarez</div>
            <div class="side-item active">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Expedientes <span class="count">247</span>
            </div>
            <div class="side-item">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Agenda <span class="count">12</span>
            </div>
            <div class="side-item">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Tareas <span class="count">34</span>
            </div>
            <div class="side-item">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Contactos
            </div>
            <div class="side-sep"></div>
            <div class="side-title">Vista</div>
            <div class="side-item">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Con vencimiento <span class="count">7</span>
            </div>
            <div class="side-item">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
              Nuevas alertas <span class="count">3</span>
            </div>
          </aside>
          <div class="main-pane">
            <div class="pane-header">
              <div>
                <div class="pane-title">Expedientes activos</div>
                <div class="pane-sub">247 expedientes · 7 con vencimiento esta semana</div>
              </div>
            </div>
            <div class="tabs">
              <div class="tab active">Todos</div>
              <div class="tab">Urgentes</div>
              <div class="tab">Archivados</div>
              <div class="tab">Recientes</div>
            </div>
            <div class="kpis">
              <div class="kpi">
                <div class="kpi-l">Ingresos mes</div>
                <div class="kpi-v">$ 1.42M</div>
                <div class="kpi-d up">+18% vs. mar</div>
              </div>
              <div class="kpi">
                <div class="kpi-l">Vencen 7 días</div>
                <div class="kpi-v">7</div>
                <div class="kpi-d warn">2 críticos</div>
              </div>
              <div class="kpi">
                <div class="kpi-l">Al día</div>
                <div class="kpi-v">99.2%</div>
                <div class="kpi-d up">0 perdidos</div>
              </div>
            </div>
            <div class="rows">
              <div class="row-h">
                <span>Carátula</span>
                <span>Juzgado</span>
                <span>Vence</span>
                <span>Estado</span>
                <span>Mov.</span>
              </div>
              <div class="row">
                <span class="car">García c/ López s/ daños</span>
                <span class="jz">Juz. Civ. 42</span>
                <span class="vnc">21·abr</span>
                <span><span class="badge ok"><span class="b-dot"></span>Al día</span></span>
                <span>
                  <svg class="spark" viewBox="0 0 70 18" preserveAspectRatio="none"><polyline points="0,12 10,10 20,11 30,6 40,8 50,4 60,7 70,3" fill="none" stroke="var(--teal-400)" stroke-width="1.2"/></svg>
                </span>
              </div>
              <div class="row">
                <span class="car">Pérez c/ BCRA s/ amparo</span>
                <span class="jz">Juz. Fed. 7</span>
                <span class="vnc">19·abr</span>
                <span><span class="badge crit"><span class="b-dot"></span>Urgente</span></span>
                <span>
                  <svg class="spark" viewBox="0 0 70 18" preserveAspectRatio="none"><polyline points="0,4 10,5 20,3 30,8 40,10 50,12 60,14 70,15" fill="none" stroke="var(--burgundy-300)" stroke-width="1.2"/></svg>
                </span>
              </div>
              <div class="row">
                <span class="car">Martínez SA s/ concurso</span>
                <span class="jz">Juz. Com. 15</span>
                <span class="vnc">25·abr</span>
                <span><span class="badge warn"><span class="b-dot"></span>Atención</span></span>
                <span>
                  <svg class="spark" viewBox="0 0 70 18" preserveAspectRatio="none"><polyline points="0,8 10,7 20,9 30,6 40,10 50,7 60,9 70,6" fill="none" stroke="var(--copper-300)" stroke-width="1.2"/></svg>
                </span>
              </div>
              <div class="row">
                <span class="car">Romero c/ OSDE s/ amparo salud</span>
                <span class="jz">Juz. CCF 4</span>
                <span class="vnc">02·may</span>
                <span><span class="badge ok"><span class="b-dot"></span>Al día</span></span>
                <span>
                  <svg class="spark" viewBox="0 0 70 18" preserveAspectRatio="none"><polyline points="0,14 10,12 20,10 30,8 40,6 50,5 60,4 70,3" fill="none" stroke="var(--teal-400)" stroke-width="1.2"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating elements -->
        <div class="float-alert">
          <div class="fi">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <div class="ft">Alerta resuelta</div>
            <div class="fs">Exp. 4592/23 actualizado — nueva providencia anexada al dashboard.</div>
            <div class="fm">Hace 2 min</div>
          </div>
        </div>
        <div class="float-cal">
          <div class="fc-h">Hoy · 22·abr</div>
          <div class="fc-b">
            <div class="fc-row"><span class="t">09:00</span><span class="l">Audiencia</span><span class="pill" style="background:var(--burgundy)"></span></div>
            <div class="fc-row"><span class="t">11:30</span><span class="l">Pericia</span><span class="pill" style="background:var(--teal)"></span></div>
            <div class="fc-row"><span class="t">16:00</span><span class="l">Vence Exp. 891/24</span><span class="pill" style="background:var(--copper)"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TRUSTED -->
<section class="band">
  <div class="trusted">
    <div class="trusted-l">Estudios jurídicos que ya confían en Themis</div>
    <div class="trusted-logos">
      <div class="logo-chip">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg>
        Álvarez & Asoc.
      </div>
      <div class="logo-chip">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="14" rx="1"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
        Moreno Legal
      </div>
      <div class="logo-chip">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>
        Estudio Salas
      </div>
      <div class="logo-chip">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2L2 7v6c0 5 4 8 10 9 6-1 10-4 10-9V7l-10-5z"/></svg>
        Defensa Ríos
      </div>
      <div class="logo-chip">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9l6-6 6 6M4 22h16M6 18V9M18 18V9M10 22V14h4v8"/></svg>
        Figueroa Abogados
      </div>
    </div>
  </div>
</section>

<!-- EL PRODUCTO POR DENTRO -->
<section class="anatomy" id="anatomy">
  <div class="sec-head">
    <div class="sec-num">02<span class="sec-num-sub">El producto</span></div>
    <div>
      <h2 class="sec-title">Todo lo que su estudio hace, <em>en un solo lugar</em></h2>
      <p class="sec-sub">
        Expedientes, movimientos, escritos, finanzas, agenda y procuración — integrados de manera nativa. Así se ve Themis por dentro.
      </p>
    </div>
  </div>

  <div class="product-grid">

    <!-- Card 1: Expedientes -->
    <div class="pcard" style="border-left:2px solid var(--burgundy)">
      <div class="pcard-meta">
        <span class="pcard-num">2.1</span>
        <span class="pcard-kicker">Expedientes</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">Todos sus casos, <em>en un vistazo</em></h3>
        <p class="pcard-desc">Dashboard unificado con búsqueda, filtros y estado procesal en tiempo real.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px">Expedientes activos · 247</div>
          <div style="display:flex;flex-direction:column;gap:0">
            <div style="display:grid;grid-template-columns:2fr 1fr 80px;gap:8px;padding:8px 0;border-bottom:1px solid var(--smoke);align-items:center;font-size:11px">
              <span style="font-weight:500;color:var(--obsidian)">García c/ López s/ daños</span>
              <span style="color:var(--pewter);font-size:10px;font-family:var(--font-mono)">Juz. Civ. 42</span>
              <span class="badge ok" style="font-size:9px"><span class="b-dot"></span>Al día</span>
            </div>
            <div style="display:grid;grid-template-columns:2fr 1fr 80px;gap:8px;padding:8px 0;border-bottom:1px solid var(--smoke);align-items:center;font-size:11px">
              <span style="font-weight:500;color:var(--obsidian)">Pérez c/ BCRA s/ amparo</span>
              <span style="color:var(--pewter);font-size:10px;font-family:var(--font-mono)">Juz. Fed. 7</span>
              <span class="badge crit" style="font-size:9px"><span class="b-dot"></span>Urgente</span>
            </div>
            <div style="display:grid;grid-template-columns:2fr 1fr 80px;gap:8px;padding:8px 0;align-items:center;font-size:11px">
              <span style="font-weight:500;color:var(--obsidian)">Romero c/ OSDE s/ amparo</span>
              <span style="color:var(--pewter);font-size:10px;font-family:var(--font-mono)">Juz. CCF 4</span>
              <span class="badge warn" style="font-size:9px"><span class="b-dot"></span>Atención</span>
            </div>
          </div>
          <div style="display:flex;gap:0;margin-top:14px;padding-top:14px;border-top:1px solid var(--smoke)">
            <div style="text-align:center;flex:1;border-right:1px solid var(--smoke)">
              <div style="font-family:var(--font-display);font-size:22px;color:var(--obsidian)">247</div>
              <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.08em;text-transform:uppercase">Activos</div>
            </div>
            <div style="text-align:center;flex:1;border-right:1px solid var(--smoke)">
              <div style="font-family:var(--font-display);font-size:22px;color:var(--burgundy)">7</div>
              <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.08em;text-transform:uppercase">Urgentes</div>
            </div>
            <div style="text-align:center;flex:1">
              <div style="font-family:var(--font-display);font-size:22px;color:var(--teal)">99.2%</div>
              <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.08em;text-transform:uppercase">Al día</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: Agenda -->
    <div class="pcard">
      <div class="pcard-meta">
        <span class="pcard-num">2.2</span>
        <span class="pcard-kicker">Agenda</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">Plazos y audiencias, <em>nunca más perdidos</em></h3>
        <p class="pcard-desc">Calendario unificado con vencimientos, audiencias y reuniones priorizados por urgencia.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-family:var(--font-display);font-size:15px;font-weight:500;color:var(--obsidian)">Abril 2026</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:8px;color:var(--burgundy);letter-spacing:.06em">● VENC.</span>
              <span style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:8px;color:#4A90D9;letter-spacing:.06em">● AUD.</span>
              <span style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:8px;color:var(--teal);letter-spacing:.06em">● REU.</span>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:8px">
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">DOM</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">LUN</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">MAR</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">MIÉ</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">JUE</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">VIE</div>
            <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-align:center">SÁB</div>
            <!-- Row 1 -->
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">1</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">2</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">3</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">4</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">5</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">6</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">7</div>
            <!-- Row 2 -->
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">8</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">9</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">10</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">11</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">12</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">13</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">14</div>
            <!-- Row 3 -->
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">15</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">16</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">17</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">18</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">19</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">20</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">21</div>
            <!-- Row 4 - with events -->
            <div style="font-size:10px;text-align:center;padding:3px;position:relative">
              22
              <div style="width:4px;height:4px;border-radius:50%;background:var(--teal);margin:0 auto"></div>
            </div>
            <div style="font-size:10px;text-align:center;padding:0">
              <div style="background:var(--burgundy);color:var(--ivory);border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;margin:2px auto">23</div>
            </div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">24</div>
            <div style="font-size:10px;text-align:center;padding:3px;position:relative">
              25
              <div style="width:4px;height:4px;border-radius:50%;background:var(--burgundy);margin:0 auto"></div>
            </div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">26</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">27</div>
            <div style="font-size:10px;text-align:center;color:var(--pewter);padding:3px">28</div>
          </div>
          <div style="border-top:1px solid var(--smoke);padding-top:10px;display:flex;flex-direction:column;gap:6px">
            <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.1em;text-transform:uppercase;margin-bottom:2px">Hoy · JUE 23</div>
            <div style="display:flex;gap:8px;align-items:center;font-size:11px">
              <span style="font-family:var(--font-mono);font-size:10px;color:var(--pewter);width:36px">09:00</span>
              <span style="width:6px;height:6px;border-radius:50%;background:var(--burgundy);flex-shrink:0"></span>
              <span style="color:var(--obsidian)">Audiencia · Juz. Civ. 42</span>
            </div>
            <div style="display:flex;gap:8px;align-items:center;font-size:11px">
              <span style="font-family:var(--font-mono);font-size:10px;color:var(--pewter);width:36px">16:00</span>
              <span style="width:6px;height:6px;border-radius:50%;background:var(--copper);flex-shrink:0"></span>
              <span style="color:var(--obsidian)">Vence Exp. 891/24</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3: Procuración -->
    <div class="pcard">
      <div class="pcard-meta">
        <span class="pcard-num">2.3</span>
        <span class="pcard-kicker">Procuración</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">Tareas de procuración, <em>bajo control</em></h3>
        <p class="pcard-desc">Panel dedicado para asignar y hacer seguimiento de tareas con devolución de resultado.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter);letter-spacing:.1em;text-transform:uppercase">Tareas pendientes · 2</div>
            <span class="mock-btn accent" style="font-size:10px;padding:4px 10px">+ Nueva tarea</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="border:1px solid var(--smoke);border-radius:8px;padding:10px;background:var(--warm-white)">
              <div style="display:flex;gap:6px;margin-bottom:6px">
                <span class="badge ok" style="font-size:9px"><span class="b-dot"></span>Pendiente</span>
                <span class="badge warn" style="font-size:9px">Media</span>
              </div>
              <div style="font-size:12px;font-weight:600;color:var(--obsidian);margin-bottom:3px">Ir al Juzgado</div>
              <div style="font-size:10px;color:var(--pewter);font-family:var(--font-mono);letter-spacing:.04em">Exp. adsaasd · asdasdads</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
                <div style="font-size:10px;color:var(--pewter)">Valentino Amato</div>
                <span class="mock-btn ghost" style="font-size:9px;padding:3px 8px">Cargar Devolución</span>
              </div>
            </div>
            <div style="border:1px solid var(--smoke);border-radius:8px;padding:10px;background:var(--warm-white)">
              <div style="display:flex;gap:6px;margin-bottom:6px">
                <span class="badge ok" style="font-size:9px"><span class="b-dot"></span>Pendiente</span>
                <span class="badge warn" style="font-size:9px">Media</span>
              </div>
              <div style="font-size:12px;font-weight:600;color:var(--obsidian);margin-bottom:3px">Revisar documentación del expediente</div>
              <div style="font-size:10px;color:var(--pewter);font-family:var(--font-mono);letter-spacing:.04em">Exp. Test2 · Caratini</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
                <div style="font-size:10px;color:var(--pewter)">Valentino Amato</div>
                <span class="mock-btn ghost" style="font-size:9px;padding:3px 8px">Cargar Devolución</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 4: MEV -->
    <div class="pcard">
      <div class="pcard-meta">
        <span class="pcard-num">2.4</span>
        <span class="pcard-kicker">MEV Automático</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">MEV sincronizado <em>cada 15 minutos</em></h3>
        <p class="pcard-desc">Seguimiento automático de expedientes. Sin abrir el portal MEV nunca más.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
            <div>
              <div style="font-family:var(--font-sans);font-size:14px;font-weight:600;color:var(--obsidian)">MEV</div>
              <div style="font-size:10px;color:var(--pewter)">Seguimiento automático de expedientes</div>
            </div>
            <span class="mock-btn accent" style="font-size:10px;padding:4px 10px">+ Agregar</span>
          </div>
          <div style="border:1px solid var(--smoke);border-radius:8px;padding:12px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
              <div>
                <div style="font-size:12px;font-weight:600;color:var(--obsidian);font-family:var(--font-mono)">García c/ López s/ daños</div>
                <div style="font-size:10px;color:var(--pewter);margin-top:2px">Juz. Civil 42 · Nro. 4592/23</div>
              </div>
              <span class="badge ok" style="font-size:9px"><span class="b-dot"></span>Al día</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;padding-top:10px;border-top:1px solid var(--smoke)">
              <div style="text-align:center;border-right:1px solid var(--smoke)">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--teal)">12</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.06em">Movimientos</div>
              </div>
              <div style="text-align:center;border-right:1px solid var(--smoke)">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--burgundy)">3</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.06em">Nuevos</div>
              </div>
              <div style="text-align:center">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--obsidian)">hoy</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.06em">Últ. sync</div>
              </div>
            </div>
          </div>
          <div style="margin-top:10px;font-family:var(--font-mono);font-size:9px;color:var(--pewter);text-align:center;letter-spacing:.06em">↻ Próxima sincronización en 8 min</div>
        </div>
      </div>
    </div>

    <!-- Card 5: PJN Bot -->
    <div class="pcard">
      <div class="pcard-meta">
        <span class="pcard-num">2.5</span>
        <span class="pcard-kicker">PJN Bot</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">Portal de Causas, <em>revisado automáticamente</em></h3>
        <p class="pcard-desc">El bot revisa el PJN, detecta movimientos nuevos y lo alerta de inmediato.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div>
              <div style="font-size:14px;font-weight:600;color:var(--obsidian)">PJN Bot</div>
              <div style="font-size:10px;color:var(--pewter)">Revisión automática del Portal de Causas</div>
            </div>
            <span class="mock-btn accent" style="font-size:10px;padding:4px 10px">Revisar todas</span>
          </div>
          <div style="border:1px solid var(--smoke);border-radius:8px;overflow:hidden">
            <div style="padding:10px 12px;background:var(--paper);border-bottom:1px solid var(--smoke);display:flex;justify-content:space-between;align-items:center">
              <div style="display:flex;gap:10px;align-items:center">
                <div style="width:28px;height:28px;border-radius:6px;background:#3B82F6;display:grid;place-items:center;color:white;font-size:13px;font-weight:700">B</div>
                <div style="font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--obsidian)">20272737593</div>
              </div>
              <span class="badge warn" style="font-size:9px">Sin datos</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);padding:12px;gap:0">
              <div style="text-align:center;border-right:1px solid var(--smoke)">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--obsidian)">—</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.04em">En panel</div>
              </div>
              <div style="text-align:center;border-right:1px solid var(--smoke)">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--obsidian)">—</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.04em">Notif.</div>
              </div>
              <div style="text-align:center;border-right:1px solid var(--smoke)">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--obsidian)">—</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.04em">Revisados</div>
              </div>
              <div style="text-align:center">
                <div style="font-family:var(--font-display);font-size:20px;color:var(--teal)">—</div>
                <div style="font-family:var(--font-mono);font-size:8px;color:var(--pewter);text-transform:uppercase;letter-spacing:.04em">Con nuevos</div>
              </div>
            </div>
            <div style="padding:8px 12px;border-top:1px solid var(--smoke);display:flex;justify-content:flex-end">
              <span class="mock-btn accent" style="font-size:10px;padding:4px 10px">▶ Revisar</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 6: Contactos -->
    <div class="pcard">
      <div class="pcard-meta">
        <span class="pcard-num">2.6</span>
        <span class="pcard-kicker">Contactos</span>
      </div>
      <div class="pcard-header">
        <h3 class="pcard-title">Clientes, jueces y partes, <em>organizados</em></h3>
        <p class="pcard-desc">Directorio completo de clientes, jueces, secretarios, peritos y abogados contrarios.</p>
      </div>
      <div class="pcard-canvas">
        <div class="mock" style="padding:14px">
          <div class="mock-tabbar" style="margin-top:0;margin-bottom:10px">
            <span class="mtab active">Clientes</span>
            <span class="mtab">Jueces</span>
            <span class="mtab">Peritos</span>
            <span class="mtab">Otros</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="border:1px solid var(--smoke);border-radius:8px;padding:10px;display:flex;gap:10px;align-items:center;background:var(--warm-white)">
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(42,123,123,.15);display:grid;place-items:center;flex-shrink:0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-size:12px;font-weight:600;color:var(--obsidian)">Valentino Amato</div>
                <div style="font-size:10px;color:var(--pewter)">asdasd@gmail.com · 123123</div>
              </div>
              <span class="badge ok" style="font-size:8px;white-space:nowrap">CLIENTE</span>
            </div>
            <div style="border:1px solid var(--smoke);border-radius:8px;padding:10px;display:flex;gap:10px;align-items:center;background:var(--warm-white)">
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(122,45,58,.1);display:grid;place-items:center;flex-shrink:0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-size:12px;font-weight:600;color:var(--obsidian)">Dr. Méndez</div>
                <div style="font-size:10px;color:var(--pewter)">mendez@juzgado42.gob.ar</div>
              </div>
              <span class="badge crit" style="font-size:8px;white-space:nowrap">JUEZ</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:4px">
              <div style="font-family:var(--font-mono);font-size:9px;color:var(--pewter)">1–2 de 2 contactos</div>
              <span class="mock-btn accent" style="font-size:10px;padding:4px 10px">+ Nuevo Cliente</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>ULTAS (PROBLEM→SOLUTION) -->
<section class="consults" id="consultas">
  <div class="sec-head">
    <div class="sec-num">03<span class="sec-num-sub">Capítulo</span></div>
    <div>
      <h2 class="sec-title">Consultas al <em>estudio</em></h2>
      <p class="sec-sub">
        Seis preguntas que seguramente se hizo esta semana. Themis las responde con procesos, no con promesas.
      </p>
    </div>
  </div>

  <div class="consult-list">
    <div class="consult">
      <div class="consult-n">I</div>
      <div class="consult-q"><span class="cquo">“</span>¿Pierdo horas revisando el MEV expediente por expediente, cada mañana?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Monitoreo automático</span>
        <div class="consult-title">Themis sincroniza MEV y PJN cada 15 minutos.</div>
        <p class="consult-desc">Reciba alertas instantáneas ante cada movimiento, resolución o nueva providencia. No abra un portal judicial nunca más.</p>
        <div class="consult-tags"><span class="tag">MEV</span><span class="tag">PJN</span><span class="tag">Alertas push</span></div>
      </div>
    </div>

    <div class="consult">
      <div class="consult-n">II</div>
      <div class="consult-q"><span class="cquo">“</span>¿Se me está por escapar un plazo procesal — otra vez?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Agenda inteligente</span>
        <div class="consult-title">Vencimientos priorizados por urgencia real.</div>
        <p class="consult-desc">Calendario unificado con plazos, audiencias y tareas de procuración. Recordatorios escalonados: 7 días, 48 h, 6 h y notificación crítica.</p>
        <div class="consult-tags"><span class="tag">Agenda</span><span class="tag">Vencimientos</span><span class="tag">Recordatorios</span></div>
      </div>
    </div>

    <div class="consult">
      <div class="consult-n">III</div>
      <div class="consult-q"><span class="cquo">“</span>¿Tengo los expedientes en cinco lugares distintos?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Dashboard único</span>
        <div class="consult-title">Todo centralizado, todo buscable.</div>
        <p class="consult-desc">Expedientes, movimientos, escritos, contactos, juzgados y entidades — en tiempo real desde cualquier dispositivo. Búsqueda universal en &lt; 200 ms.</p>
        <div class="consult-tags"><span class="tag">Dashboard</span><span class="tag">Multi-dispositivo</span><span class="tag">Búsqueda</span></div>
      </div>
    </div>

    <div class="consult">
      <div class="consult-n">IV</div>
      <div class="consult-q"><span class="cquo">“</span>¿Cómo le explico a mi cliente cómo va su causa — sin prepararle un informe a mano?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Reportes en un click</span>
        <div class="consult-title">PDFs profesionales — con su marca — listos para enviar.</div>
        <p class="consult-desc">Reporte por expediente con estado, movimientos, próximos pasos y honorarios devengados. Envío directo por email desde la plataforma.</p>
        <div class="consult-tags"><span class="tag">Reportes PDF</span><span class="tag">White-label</span><span class="tag">Email</span></div>
      </div>
    </div>

    <div class="consult">
      <div class="consult-n">V</div>
      <div class="consult-q"><span class="cquo">“</span>¿Cuánto le debe cada cliente — y cuánto facturé este mes?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Finanzas por expediente</span>
        <div class="consult-title">Honorarios, gastos y pagos en un solo tablero.</div>
        <p class="consult-desc">Registre honorarios acordados, adelantos, gastos causídicos y saldos. Vistas cruzadas por cliente, por causa y por período fiscal.</p>
        <div class="consult-tags"><span class="tag">Honorarios</span><span class="tag">Cuenta corriente</span><span class="tag">Facturación</span></div>
      </div>
    </div>

    <div class="consult">
      <div class="consult-n">VI</div>
      <div class="consult-q"><span class="cquo">“</span>¿Cómo controlo lo que hacen los procuradores en el terreno?”</div>
      <div class="consult-a">
        <span class="consult-kicker">Trazabilidad total</span>
        <div class="consult-title">Cada diligencia queda documentada, con devolución.</div>
        <p class="consult-desc">Asigne tareas con contexto completo del expediente. Seguimiento en tiempo real, adjuntos, ubicación y confirmación de resolución.</p>
        <div class="consult-tags"><span class="tag">Procuración</span><span class="tag">Tareas</span><span class="tag">Trazabilidad</span></div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIO -->
<section class="testimonial-wrap" id="testimonios">
  <div class="sec-head">
    <div class="sec-num">04<span class="sec-num-sub">Capítulo</span></div>
    <div>
      <h2 class="sec-title">Lo que dicen <em>quienes ya lo usan</em></h2>
      <p class="sec-sub">
        El estudio Álvarez & Asociados trabaja con Themis todos los días desde hace 14 meses. Esto es lo que cambió en sus mañanas.
      </p>
    </div>
  </div>

  <div class="testimonial">
    <div class="test-body">
      <div class="test-kicker">Entrevista · Buenos Aires · 2026</div>
      <blockquote class="test-quote">
        Antes perdíamos <em>media mañana</em> revisando el MEV expediente por expediente. Hoy Themis lo hace solo y nos avisa al instante. Desde que lo implementamos <em>no perdimos un solo plazo</em>.
      </blockquote>
      <div class="test-attr">
        <div class="test-avatar">RA</div>
        <div class="test-who">
          <div class="n">Dr. Roberto Álvarez</div>
          <div class="r">SOCIO FUNDADOR · ÁLVAREZ &amp; ASOCIADOS</div>
        </div>
      </div>
    </div>

    <div class="test-stats">
      <div class="ts-item">
        <span class="ts-v teal">0</span>
        <span class="ts-l">Plazos perdidos desde la implementación</span>
      </div>
      <div class="ts-item">
        <span class="ts-v bg">3 h</span>
        <span class="ts-l">Ahorradas por día en tareas manuales</span>
      </div>
      <div class="ts-item">
        <span class="ts-v">100%</span>
        <span class="ts-l">Del equipo lo usa a diario</span>
      </div>
      <div class="ts-item">
        <span class="ts-v teal">24 h</span>
        <span class="ts-l">Onboarding completo del estudio</span>
      </div>
    </div>
  </div>

  <div class="test-mini-grid">
    <div class="test-mini">
      <p class="mq">“La agenda con vencimientos me cambió la forma de organizar la semana. Ahora sé exactamente qué es urgente.”</p>
      <div class="test-mini-who">
        <div class="mini-av" style="background:var(--teal)">CL</div>
        <div>
          <div class="mini-n">Dra. Carolina López</div>
          <div class="mini-r">ABOGADA SENIOR</div>
        </div>
      </div>
    </div>
    <div class="test-mini">
      <p class="mq">“Tengo las tareas asignadas con toda la info del expediente, sin tener que andar preguntando. Todo queda registrado.”</p>
      <div class="test-mini-who">
        <div class="mini-av" style="background:var(--copper)">MR</div>
        <div>
          <div class="mini-n">Martín Rodríguez</div>
          <div class="mini-r">PROCURADOR</div>
        </div>
      </div>
    </div>
    <div class="test-mini">
      <p class="mq">“Cuando un cliente me llama puedo darle el estado de su causa en segundos. Sin buscar en carpetas.”</p>
      <div class="test-mini-who">
        <div class="mini-av" style="background:var(--burgundy)">VS</div>
        <div>
          <div class="mini-n">Dra. Valentina Sánchez</div>
          <div class="mini-r">ÁREA CIVIL</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="precios">
  <div class="sec-head">
    <div class="sec-num">05<span class="sec-num-sub">Capítulo</span></div>
    <div>
      <h2 class="sec-title">Planes para su <em>crecimiento</em></h2>
      <p class="sec-sub">
        Elija el plan que mejor se adapte al volumen de su estudio. Sin costos ocultos, sin sorpresas. Cambio de plan en cualquier momento.
      </p>
    </div>
  </div>

  <div style="display:flex;justify-content:center;margin-bottom:40px">
    <div class="pricing-toggle">
      <button class="pt-opt" data-period="monthly">Mensual</button>
      <button class="pt-opt active" data-period="yearly">Anual <span class="save">−20%</span></button>
    </div>
  </div>

  <div class="price-table">
    <!-- HEADER ROW -->
    <div class="pt-cell head">
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--pewter);letter-spacing:.12em;text-transform:uppercase">Planes</div>
      <div style="font-family:var(--font-display);font-style:italic;font-size:18px;color:var(--pewter-dark)">Elija el suyo →</div>
    </div>
    <div class="pt-cell head">
      <div class="pt-plan-name">Individual</div>
      <div class="pt-plan-info">Abogados independientes</div>
      <div class="pt-price"><span class="curr">US$</span><span class="amt" data-m="45" data-y="36">36</span><span class="per">/mes</span></div>
    </div>
    <div class="pt-cell head featured">
      <div class="pt-plan-name">Firma</div>
      <div class="pt-plan-info">Estudios en crecimiento</div>
      <div class="pt-price"><span class="curr">US$</span><span class="amt" data-m="120" data-y="96">96</span><span class="per">/mes</span></div>
    </div>
    <div class="pt-cell head">
      <div class="pt-plan-name">Corporativo</div>
      <div class="pt-plan-info">Grandes despachos</div>
      <div class="pt-price"><span class="curr">US$</span><span class="amt" data-m="290" data-y="232">232</span><span class="per">/mes</span></div>
    </div>

    <!-- ROWS -->
    <div class="pt-cell rowlabel">Expedientes</div>
    <div class="pt-cell">Hasta 100</div>
    <div class="pt-cell">Ilimitados</div>
    <div class="pt-cell">Ilimitados</div>

    <div class="pt-cell rowlabel">Usuarios</div>
    <div class="pt-cell">1</div>
    <div class="pt-cell">Hasta 5</div>
    <div class="pt-cell">Ilimitados</div>

    <div class="pt-cell rowlabel">Monitoreo MEV/PJN</div>
    <div class="pt-cell">Diario</div>
    <div class="pt-cell">Tiempo real</div>
    <div class="pt-cell">Tiempo real + API</div>

    <div class="pt-cell rowlabel">Agenda y vencimientos</div>
    <div class="pt-cell"><span class="pt-check">●</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>

    <div class="pt-cell rowlabel">Reportes PDF white-label</div>
    <div class="pt-cell"><span class="pt-dash">—</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>

    <div class="pt-cell rowlabel">Control de pericias y finanzas</div>
    <div class="pt-cell"><span class="pt-dash">—</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>

    <div class="pt-cell rowlabel">API para integraciones</div>
    <div class="pt-cell"><span class="pt-dash">—</span></div>
    <div class="pt-cell"><span class="pt-dash">—</span></div>
    <div class="pt-cell"><span class="pt-check">●</span></div>

    <div class="pt-cell rowlabel">Soporte</div>
    <div class="pt-cell">Email · 48 h</div>
    <div class="pt-cell">Chat · 8 h</div>
    <div class="pt-cell">Prioritario 24/7</div>

    <div class="pt-cell rowlabel">Onboarding</div>
    <div class="pt-cell">Autoservicio</div>
    <div class="pt-cell">Asistido · 24 h</div>
    <div class="pt-cell">Personalizado</div>

    <!-- CTA ROW -->
    <div class="pt-cell footer rowlabel" style="background:var(--warm-white);font-family:var(--font-display);text-transform:none;letter-spacing:.02em;font-size:14px;font-style:italic;color:var(--pewter-dark)">Empiece hoy.</div>
    <div class="pt-cell footer"><a href="https://wa.me/5491131838472?text=Hola%2C%20me%20interesa%20comenzar%20con%20el%20plan%20Starter%20de%20Themis." target="_blank" rel="noopener noreferrer" class="pt-cta out">Comenzar →</a></div>
    <div class="pt-cell footer"><a href="https://wa.me/5491131838472?text=Hola%2C%20me%20interesa%20probar%20Themis%2014%20d%C3%ADas%20gratis%20con%20el%20plan%20Pro." target="_blank" rel="noopener noreferrer" class="pt-cta fill">Prueba 14 días →</a></div>
    <div class="pt-cell footer"><a href="https://wa.me/5491131838472?text=Hola%2C%20me%20interesa%20el%20plan%20empresarial%20de%20Themis.%20%C2%BFPodr%C3%ADamos%20hablar%3F" target="_blank" rel="noopener noreferrer" class="pt-cta out">Contactar ventas →</a></div>
  </div>

  <!-- ENTERPRISE / TAILORED PLAN -->
  <div class="enterprise-cta">
    <div class="ent-left">
      <div class="ent-badge">
        <span class="ent-dot"></span>
        Plan Praetor · A medida
      </div>
      <h3 class="ent-title">¿Necesita algo <em>diseñado para su estudio?</em></h3>
      <p class="ent-desc">
        Para firmas con más de 20 abogados, flujos específicos, integraciones con sistemas internos o requerimientos de compliance particulares. Diseñamos el plan con usted.
      </p>
      <div class="ent-feats">
        <div class="ent-feat"><span class="ent-chk">●</span> Integraciones a medida (ERP, CRM, facturación)</div>
        <div class="ent-feat"><span class="ent-chk">●</span> SLA dedicado y servidor aislado</div>
        <div class="ent-feat"><span class="ent-chk">●</span> Onboarding in-situ y capacitación del equipo</div>
        <div class="ent-feat"><span class="ent-chk">●</span> Gerente de cuenta asignado</div>
      </div>
    </div>
    <div class="ent-right">
      <div class="ent-quote">
        <div class="ent-q-l">Desde</div>
        <div class="ent-q-v"><span class="curr">US$</span>490<span class="per">/mes</span></div>
        <div class="ent-q-s">Cotización personalizada según necesidades</div>
      </div>
      <a href="https://wa.me/5491131838472?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20plan%20Praetor%20de%20Themis." target="_blank" rel="noopener noreferrer" class="ent-cta">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Solicitar cotización
      </a>
      <a href="https://wa.me/5491131838472?text=Hola%2C%20quisiera%20agendar%20una%20llamada%20con%20el%20equipo%20de%20ventas%20de%20Themis." target="_blank" rel="noopener noreferrer" class="ent-cta ghost">
        Agendar llamada con ventas →
      </a>
    </div>
  </div>

  <p style="margin-top:24px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--pewter);letter-spacing:.08em">
    Todos los planes incluyen datos encriptados · Copias diarias · Sin permanencia · Cancele cuando quiera
  </p>
</section>

<!-- CTA FINAL -->
<section class="cta-final">
  <div class="cta-inner">
    <div>
      <div class="cta-k">· Demo sin costo ·</div>
      <h2 class="cta-title">¿Listo para recuperar<br>su <em>mañana del lunes?</em></h2>
      <p class="cta-body">
        Demo personalizada de 30 minutos. Configuración completa en 24 horas. Su estudio trabajando con Themis antes de que termine la semana.
      </p>
      <div class="cta-actions">
        <a href="https://wa.me/5491131838472?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20personalizada%20de%20Themis." target="_blank" rel="noopener noreferrer" class="btn btn-primary ivory lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Solicitar demo
        </a>
        <a href="https://wa.me/5491131838472?text=Hola%2C%20quisiera%20hablar%20con%20un%20asesor%20de%20Themis." target="_blank" rel="noopener noreferrer" class="btn btn-ghost dark lg">Hablar con asesor</a>
      </div>
      <div class="cta-small">Sin tarjeta · Sin compromiso · Cancele cuando quiera</div>
    </div>

    <div class="cta-contact">
      <div class="cc-row">
        <div class="cc-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
        <div>
          <div class="cc-l">WhatsApp</div>
          <div class="cc-v">+54 9 11 3183-8472</div>
          <div class="cc-s">Respuesta en menos de 30 minutos</div>
        </div>
      </div>
      <div class="cc-row">
        <div class="cc-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
        </div>
        <div>
          <div class="cc-l">Email comercial</div>
          <div class="cc-v">hola@themis.legal</div>
          <div class="cc-s">Lun a Vie · 9 a 19 h</div>
        </div>
      </div>
      <div class="cc-row">
        <div class="cc-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div class="cc-l">Oficina</div>
          <div class="cc-v">Av. Callao 420, CABA</div>
          <div class="cc-s">Con cita previa</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="site">
  <div class="footer-inner">
    <div class="foot-brand">
      <a href="#" class="brand">
        <svg class="brand-mark" width="28" height="28" viewBox="0 0 80 80" fill="none">
          <polygon points="40,12 36,18 44,18" fill="var(--obsidian)"/>
          <line x1="40" y1="18" x2="40" y2="56" stroke="var(--obsidian)" stroke-width="3"/>
          <line x1="18" y1="30" x2="62" y2="30" stroke="var(--obsidian)" stroke-width="3"/>
          <path d="M12,38 Q18,48 24,38" stroke="var(--burgundy)" stroke-width="3.5" fill="none"/>
          <path d="M56,38 Q62,48 68,38" stroke="var(--teal)" stroke-width="3.5" fill="none"/>
          <line x1="18" y1="30" x2="12" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
          <line x1="18" y1="30" x2="24" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
          <line x1="62" y1="30" x2="56" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
          <line x1="62" y1="30" x2="68" y2="38" stroke="var(--obsidian)" stroke-width="2.5"/>
          <line x1="30" y1="56" x2="50" y2="56" stroke="var(--obsidian)" stroke-width="3"/>
        </svg>
        <div><div class="brand-name">Themis</div></div>
      </a>
      <p class="foot-desc">La plataforma de gestión procesal premium para estudios jurídicos que buscan eficiencia y crecimiento.</p>
      <p style="font-family:var(--font-display);font-style:italic;color:var(--pewter-dark);font-size:15px">“El orden que su estudio merece.”</p>
    </div>
    <div class="foot-col">
      <h4>Producto</h4>
      <a href="#">Características</a>
      <a href="#">Precios</a>
      <a href="#">Integraciones</a>
      <a href="#">Novedades</a>
    </div>
    <div class="foot-col">
      <h4>Soporte</h4>
      <a href="#">Documentación</a>
      <a href="#">Estado del servicio</a>
      <a href="https://wa.me/5491131838472?text=Hola%2C%20quisiera%20ponerme%20en%20contacto%20con%20el%20equipo%20de%20Themis." target="_blank" rel="noopener noreferrer">Contacto</a>
      <a href="https://wa.me/5491131838472?text=Hola%2C%20me%20comunico%20desde%20la%20web%20de%20Themis." target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
    <div class="foot-col">
      <h4>Legal</h4>
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
      <a href="#">Seguridad</a>
      <a href="#">Cookies</a>
    </div>
  </div>
  <div class="foot-bottom">
    <div>© 2026 Themis · Buenos Aires, Argentina</div>
    <div>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
      <a href="#">X</a>
    </div>
  </div>
</footer>

<!-- WHATSAPP FLOAT -->
<a href="https://wa.me/5491131838472?text=Hola%2C%20estoy%20viendo%20la%20web%20de%20Themis%20y%20tengo%20una%20consulta." target="_blank" rel="noopener noreferrer" class="wa">
  <span class="wa-tip">¿En qué podemos ayudarle?</span>
  <span class="wa-btn">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.84 12.84 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488"/></svg>
  </span>
</a>

<!-- TWEAKS -->
<button id="tweaks-btn" aria-label="Abrir tweaks" style="position:fixed;bottom:28px;left:28px;z-index:85;width:44px;height:44px;border-radius:50%;background:var(--obsidian);color:var(--ivory);border:none;display:none;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 20px rgba(26,26,46,.3)">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
</button>

<div class="tweaks" id="tweaks-panel">
  <div class="tweaks-h">
    <span class="tt">Tweaks</span>
    <button class="x" id="tw-close">×</button>
  </div>
  <div class="tweaks-b">
    <div class="tweak">
      <span class="tweak-l">Hero style</span>
      <div class="tweak-seg" data-tweak="hero">
        <button data-val="editorial" class="on">Editorial</button>
        <button data-val="classic">Clásico</button>
      </div>
    </div>
    <div class="tweak">
      <span class="tweak-l">Accent</span>
      <div class="tweak-swatch" data-tweak="accent">
        <button data-val="#7A2D3A" style="background:#7A2D3A" class="on" title="Burgundy"></button>
        <button data-val="#2A7B7B" style="background:#2A7B7B" title="Teal"></button>
        <button data-val="#1A1A2E" style="background:#1A1A2E" title="Obsidian"></button>
        <button data-val="#B87333" style="background:#B87333" title="Copper"></button>
      </div>
    </div>
    <div class="tweak">
      <span class="tweak-l">Densidad</span>
      <div class="tweak-seg" data-tweak="density">
        <button data-val="compact">Compacta</button>
        <button data-val="normal" class="on">Normal</button>
        <button data-val="loose">Amplia</button>
      </div>
    </div>
    <div class="tweak">
      <span class="tweak-l">Grain</span>
      <div class="tweak-seg" data-tweak="grain">
        <button data-val="on" class="on">Activado</button>
        <button data-val="off">Desactivado</button>
      </div>
    </div>
  </div>
</div>

`;

const INIT_SCRIPT = `
(function() {
  var TWEAK_DEFAULTS = {
    hero: 'classic',
    accent: '#2A7B7B',
    density: 'normal',
    grain: 'on'
  };
  var state = Object.assign({}, TWEAK_DEFAULTS);

  function applyState() {
    document.documentElement.style.setProperty('--accent', state.accent);
    var map = {compact:'64px', normal:'100px', loose:'140px'};
    document.querySelectorAll('.anatomy,.consults,.testimonial-wrap,.pricing,.cta-final').forEach(function(el) {
      el.style.paddingTop = map[state.density];
      el.style.paddingBottom = map[state.density];
    });
    if (state.hero === 'classic') {
      var ht = document.querySelector('.hero-title');
      if (ht) ht.classList.add('classic');
      var hg = document.querySelector('.hero-grid');
      if (hg) hg.style.gridTemplateColumns = '1fr';
      var hm = document.querySelector('.hero-meta');
      if (hm) hm.style.display = 'none';
      var hl = document.querySelector('.hero-left');
      if (hl) hl.style.textAlign = 'center';
      var ha = document.querySelector('.hero-actions');
      if (ha) ha.style.justifyContent = 'center';
      var hle = document.querySelector('.hero-lede');
      if (hle) hle.style.margin = '0 auto 16px';
      var hb = document.querySelector('.hero-body');
      if (hb) hb.style.margin = '0 auto 32px';
      var htr = document.querySelector('.hero-trust');
      if (htr) { htr.style.maxWidth = '600px'; htr.style.margin = '0 auto'; }
      var hr = document.querySelector('.hero-right');
      if (hr) { hr.style.maxWidth = '900px'; hr.style.margin = '40px auto 0'; }
    }
    var gr = document.querySelector('.grain');
    if (gr) gr.style.display = state.grain === 'on' ? '' : 'none';
    document.querySelectorAll('[data-tweak]').forEach(function(group) {
      var key = group.dataset.tweak;
      group.querySelectorAll('button').forEach(function(b) {
        b.classList.toggle('on', b.dataset.val === state[key]);
      });
    });
  }
  applyState();

  var twBtn = document.getElementById('tweaks-btn');
  var twClose = document.getElementById('tw-close');
  if (twClose) twClose.addEventListener('click', function() {
    document.getElementById('tweaks-panel').classList.remove('open');
  });
  if (twBtn) twBtn.addEventListener('click', function() {
    document.getElementById('tweaks-panel').classList.toggle('open');
  });
  document.querySelectorAll('[data-tweak]').forEach(function(group) {
    var key = group.dataset.tweak;
    group.addEventListener('click', function(e) {
      var b = e.target.closest('button[data-val]');
      if (!b) return;
      state[key] = b.dataset.val;
      applyState();
    });
  });

  document.querySelectorAll('.pt-opt').forEach(function(b) {
    b.addEventListener('click', function() {
      document.querySelectorAll('.pt-opt').forEach(function(x) { x.classList.remove('active'); });
      b.classList.add('active');
      var per = b.dataset.period;
      document.querySelectorAll('.pt-price .amt').forEach(function(a) {
        a.textContent = per === 'monthly' ? a.dataset.m : a.dataset.y;
      });
      document.querySelectorAll('.pt-price .per').forEach(function(p) {
        p.textContent = per === 'monthly' ? '/mes' : '/mes anual';
      });
    });
  });
})();
`;

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = INIT_SCRIPT;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: HTML_BODY }}
    />
  );
}
