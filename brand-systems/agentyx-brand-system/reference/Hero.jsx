// Hero.jsx — radial blue glow + cyan stroke field + headline + dual CTA + stat tiles
function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 76px)',
      padding: '80px 32px 100px',
      overflow: 'hidden',
      background: '#070b13',
    }}>
      {/* Radial gradient layer */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 42%, rgba(37,99,235,0.18), transparent 45%), linear-gradient(to bottom, rgba(7,11,19,0.05), #070b13 96%)',
      }} />
      {/* Cyan stroke field */}
      <div style={{ position: 'absolute', inset: '-12%', opacity: 0.9, pointerEvents: 'none' }}>
        <svg viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', color: '#67e8f9' }}>
          <g stroke="currentColor" fill="none">
            {Array.from({ length: 18 }).map((_, i) => {
              const offset = i * 15;
              const widthOp = 0.5 + i * 0.04;
              const op = 0.06 + i * 0.012;
              return (
                <path key={i}
                  d={`M${-380 + offset} ${-189 - offset}C${-380 + offset} ${-189 - offset} ${-312 + offset} ${216 - offset} ${152 - offset} ${343 - offset}C${616 - offset} ${470 - offset} ${684 - offset} ${875 - offset} ${684 - offset} ${875 - offset}`}
                  strokeWidth={widthOp}
                  strokeOpacity={op}
                  strokeDasharray="2 6"
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center', paddingTop: 60 }}>
        <div style={{
          fontFamily: 'var(--ax-font-mono)', fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.18em',
          color: '#67e8f9', marginBottom: 24,
        }}>EMPLEADOS DE IA · OPERANDO EN TUS SISTEMAS</div>

        <h1 style={{
          fontFamily: 'var(--ax-font-heading)',
          fontSize: 'clamp(40px, 6.5vw, 76px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          color: '#f8fafc',
          margin: 0,
          textWrap: 'balance',
        }}>
          Tu próxima contratación<br />
          no será una persona.<br />
          Será un <span style={{ color: '#60a5fa' }}>AI Agent</span>.
        </h1>

        <p style={{
          fontFamily: 'var(--ax-font-body)', fontSize: 18, lineHeight: 1.55,
          color: '#cbd5e1',
          maxWidth: 720, margin: '28px auto 0',
          textWrap: 'pretty',
        }}>
          Agentyx despliega empleados de IA que trabajan dentro de tus sistemas,
          ejecutan procesos completos y convierten carga operativa en resultados medibles.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 24px', borderRadius: 10,
            background: '#2563eb', color: '#fff',
            fontFamily: 'var(--ax-font-body)', fontSize: 15, fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 4px 24px -4px rgba(37,99,235,0.45)',
          }}>Ver agentes en acción
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 24px', borderRadius: 10,
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            color: '#e2e8f0',
            fontFamily: 'var(--ax-font-body)', fontSize: 15, fontWeight: 500,
            textDecoration: 'none',
          }}>Probar demo técnica</a>
        </div>

        {/* Stat tiles */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
          maxWidth: 800, margin: '72px auto 0',
        }}>
          {[
            { num: 'Minutos', label: 'PARA EJECUTAR PROCESOS', sub: 'vs. horas humanas', color: '#60a5fa' },
            { num: '24/7', label: 'EJECUCIÓN AUTÓNOMA', sub: 'Sin ampliar headcount', color: '#67e8f9' },
            { num: '+ Foco', label: 'PARA EL EQUIPO HUMANO', sub: 'en lo estratégico', color: '#fbbf24' },
          ].map(t => (
            <div key={t.label} style={{
              background: 'rgba(17,24,39,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: 20,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                fontFamily: 'var(--ax-font-heading)', fontSize: 36, fontWeight: 700,
                lineHeight: 1, letterSpacing: '-0.02em', color: t.color,
              }}>{t.num}</div>
              <div style={{
                fontFamily: 'var(--ax-font-mono)', fontSize: 10, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.14em',
                color: '#64748b', marginTop: 12,
              }}>{t.label}</div>
              <div style={{ fontFamily: 'var(--ax-font-body)', fontSize: 12, color: '#94a3b8', marginTop: 4 }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
