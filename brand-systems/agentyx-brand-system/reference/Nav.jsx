// Nav.jsx — top navigation (logo lockup + links + ES/EN + CTA)
function Nav() {
  const [lang, setLang] = React.useState('es');
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '16px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(7,11,19,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <img src="../assets/agentyx-logo.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
        <div>
          <div style={{ fontFamily: 'var(--ax-font-heading)', fontSize: 20, fontWeight: 700, color: '#f8fafc', lineHeight: 1, letterSpacing: '-0.01em' }}>Agentyx</div>
          <div style={{ fontFamily: 'var(--ax-font-body)', fontSize: 11, color: '#64748b', marginTop: 2 }}>by Lev Innovation</div>
        </div>
      </a>

      <div style={{ display: 'flex', gap: 28, fontFamily: 'var(--ax-font-body)', fontSize: 14, color: '#94a3b8' }}>
        <a href="#demo" style={navLinkStyle}>Ver agentes en acción</a>
        <a href="#cases" style={navLinkStyle}>Casos</a>
        <a href="#platform" style={navLinkStyle}>Agentyx</a>
        <a href="#method" style={navLinkStyle}>Cómo trabajamos</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '10px 18px', borderRadius: 8,
          background: 'rgba(37,99,235,0.10)',
          border: '1px solid rgba(96,165,250,0.30)',
          color: '#bfdbfe',
          fontFamily: 'var(--ax-font-body)', fontSize: 13, fontWeight: 500,
          textDecoration: 'none', transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(37,99,235,0.20)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(37,99,235,0.10)'}
        >Agendar demo</a>

        <div style={{ display: 'inline-flex', padding: 2, borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)' }}>
          {['es', 'en'].map(code => (
            <button key={code} onClick={() => setLang(code)} style={{
              padding: '4px 10px', borderRadius: 999, border: 0, cursor: 'pointer',
              fontFamily: 'var(--ax-font-body)', fontSize: 11, textTransform: 'uppercase',
              background: lang === code ? '#2563eb' : 'transparent',
              color: lang === code ? '#fff' : '#94a3b8',
              transition: 'all 0.2s',
            }}>{code}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}
const navLinkStyle = {
  textDecoration: 'none', color: 'inherit',
  transition: 'color 0.2s',
  fontWeight: 500,
};
window.Nav = Nav;
