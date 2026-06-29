// Section.jsx — section eyebrow + title + subhead, agent cards, integration strip, footer
function SectionHeader({ eyebrow, title, subhead }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
      <div style={{
        fontFamily: 'var(--ax-font-mono)', fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: '0.18em',
        color: '#64748b', marginBottom: 18,
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: 'var(--ax-font-heading)',
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
        color: '#f8fafc', margin: 0, textWrap: 'balance',
      }}>{title}</h2>
      {subhead && (
        <p style={{
          fontFamily: 'var(--ax-font-body)', fontSize: 17, lineHeight: 1.55,
          color: '#94a3b8', marginTop: 18, textWrap: 'pretty',
        }}>{subhead}</p>
      )}
    </div>
  );
}

function AgentCard({ name, vertical, bullets }) {
  return (
    <div style={{
      background: '#111827',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 14, padding: 26,
      boxShadow: '0 1px 0 rgba(0,0,0,0.30), 0 12px 28px -20px rgba(0,0,0,0.42)',
    }}>
      <div style={{
        fontFamily: 'var(--ax-font-mono)', fontSize: 10, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: '0.14em',
        color: '#64748b',
      }}>AGENTE</div>
      <h3 style={{
        fontFamily: 'var(--ax-font-heading)', fontSize: 20, fontWeight: 700,
        lineHeight: 1.25, color: '#f8fafc', margin: '12px 0 6px', textWrap: 'balance',
      }}>{name}</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontFamily: 'var(--ax-font-body)', fontSize: 14, color: '#cbd5e1', display: 'flex', gap: 12, lineHeight: 1.5 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 3 }}>
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 22, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{
          fontFamily: 'var(--ax-font-mono)', fontSize: 10, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.14em',
          color: '#67e8f9',
        }}>{vertical}</span>
      </div>
    </div>
  );
}

function AgentsGrid() {
  const agents = [
    { name: 'Gestor Autónomo de Pedidos y Delivery', vertical: 'Automotriz · Concesionarias',
      bullets: ['Atiende llamadas operadas por IA de voz', 'Procesa órdenes directamente en el sistema', 'Coordina canal de delivery interno end-to-end', 'Recupera márgenes frente a apps de terceros'] },
    { name: 'Coordinador Proactivo de Servicio al Cliente', vertical: 'Automotriz · Concesionarias',
      bullets: ['Monitorea en tiempo real el estado de vehículos', 'Agenda citas de mantenimiento automáticamente', 'Envía alertas personalizadas de entregas'] },
    { name: 'Auditor de Inventarios y Sincronización Contable', vertical: 'Finanzas · Cadena de Suministro',
      bullets: ['Conecta ERP con software contable', 'Mantiene la información limpia y sincronizada', 'Analiza tendencias de venta de forma predictiva', 'Emite órdenes de recompra automáticas'] },
    { name: 'Analista de Datos de Negocio e Insights', vertical: 'Operaciones Comerciales · BI',
      bullets: ['Cruza bases de datos masivas para resúmenes', 'Genera insights financieros para decisiones', 'Gestiona campañas digitales midiendo ROI'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
      {agents.map(a => <AgentCard key={a.name} {...a} />)}
    </div>
  );
}

function IntegrationStrip() {
  const items = ['ERP', 'CRM', 'WhatsApp', 'Email', 'Sheets', 'Portales', 'Bases de datos', 'Documentos'];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
      {items.map(i => (
        <span key={i} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--ax-font-mono)', fontSize: 12, color: '#cbd5e1',
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }} />
          {i}
        </span>
      ))}
    </div>
  );
}

function GovernanceList() {
  const items = [
    'Permisos definidos por sistema',
    'Bitácora completa de cada acción',
    'Escalamiento humano en decisiones marcadas',
    'Resultados medidos por proceso',
    'Reversible: kill switch en cada agente',
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, maxWidth: 800, margin: '0 auto' }}>
      {items.map(i => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 14,
          background: 'rgba(17,24,39,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 10, padding: '16px 20px',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
          </svg>
          <span style={{ fontFamily: 'var(--ax-font-body)', fontSize: 14, color: '#e2e8f0' }}>{i}</span>
        </div>
      ))}
    </div>
  );
}

function FinalCTA() {
  return (
    <div style={{
      position: 'relative',
      maxWidth: 1100, margin: '0 auto',
      padding: '72px 32px',
      borderRadius: 24,
      background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.20), transparent 60%), #0c1220',
      border: '1px solid rgba(96,165,250,0.20)',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: 'var(--ax-font-mono)', fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: '0.18em',
        color: '#67e8f9', marginBottom: 18,
      }}>EMPIEZA HOY</div>
      <h2 style={{
        fontFamily: 'var(--ax-font-heading)', fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em',
        color: '#f8fafc', margin: 0, textWrap: 'balance',
      }}>Integra AI Agents en tu infraestructura operativa.</h2>
      <p style={{
        fontFamily: 'var(--ax-font-body)', fontSize: 17, lineHeight: 1.55,
        color: '#94a3b8', maxWidth: 640, margin: '20px auto 32px',
      }}>Deja atrás los reprocesos manuales. Agentes operando dentro de tus sistemas, 24/7, sin ampliar headcount.</p>
      <a href="#" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 28px', borderRadius: 10,
        background: '#2563eb', color: '#fff',
        fontFamily: 'var(--ax-font-body)', fontSize: 15, fontWeight: 500,
        textDecoration: 'none',
        boxShadow: '0 4px 24px -4px rgba(37,99,235,0.45)',
      }}>Evaluar Operación de Mi Empresa
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: '40px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: 1400, margin: '0 auto',
      fontFamily: 'var(--ax-font-body)', fontSize: 12, color: '#64748b',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="../assets/agentyx-logo.png" alt="" style={{ width: 22, height: 22 }} />
        <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Agentyx</span>
        <span>· by Lev Innovation</span>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <span>© 2026</span>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos</a>
      </div>
    </footer>
  );
}

window.SectionHeader = SectionHeader;
window.AgentCard = AgentCard;
window.AgentsGrid = AgentsGrid;
window.IntegrationStrip = IntegrationStrip;
window.GovernanceList = GovernanceList;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
