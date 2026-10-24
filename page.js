'use client';
import { useState } from 'react';
const sections = ['Home','Earn','Referrals','Wallet','Activity','Profile'];
export default function HomePage() {
  const [active,setActive] = useState('Home');
  return <main className="layout">
    <aside className="sidebar"><div className="brand"><span className="brand-logo">A</span><span><b>ASTRAVELLE</b><small>USER DASHBOARD</small></span></div>
      <p className="nav-title">MENU</p>{sections.map((s,i)=><button key={s} className={'nav '+(active===s?'selected':'')} onClick={()=>setActive(s)}><span>{['⌂','✦','♧','◇','◷','○'][i]}</span>{s}</button>)}
      <a className="admin-link" href="/admin">⚙ Open Admin Panel ↗</a><div className="sidebar-note">DEMO MODE<br/><small>Payments disabled</small></div>
    </aside>
    <section className="content"><header className="header"><div><small>ASTRAVELLE / USER</small><h1>{active}</h1></div><span className="avatar">U</span></header>
      {active==='Home'?<><section className="hero"><div><span className="chip">✦ MEMBER DASHBOARD</span><h2>Build your next<br/><em>milestone.</em></h2><p>Track demo rewards, explore tasks and manage your account.</p><button className="gold-btn" onClick={()=>setActive('Earn')}>Explore earning ↗</button></div><div className="orb"><b>A</b></div></section>
      <div className="stats"><article><small>DEMO BALANCE</small><strong>$0.00</strong><span>USDT · preview only</span></article><article><small>TOTAL EARNED</small><strong>$0.00</strong><span>Demo data</span></article><article><small>COMPLETED TASKS</small><strong>0</strong><span>Sample account</span></article></div>
      <div className="columns"><article className="panel"><small>GET STARTED</small><h3>Quick actions</h3>{[['✦','Explore tasks','Discover sample activities','Earn'],['◇','Open wallet','Review wallet preview','Wallet'],['♧','Invite friends','See referral design','Referrals']].map(x=><button className="quick" key={x[1]} onClick={()=>setActive(x[3])}><b>{x[0]}</b><span><strong>{x[1]}</strong><small>{x[2]}</small></span><i>↗</i></button>)}</article><article className="panel"><small>PLATFORM STATUS</small><h3>Interface preview</h3><p>This is a UI demo. No real rewards or transactions occur here.</p><div className="bar"><span/></div><small>Preview only · 100%</small></article></div></>
      :<article className="panel inner"><span className="chip">ASTRAVELLE PREVIEW</span><h2>{active}</h2><p>{{Earn:'Sample earning tasks and daily rewards will appear here when implemented.',Referrals:'Referral links and commissions are not connected.',Wallet:'Demo wallet only. Deposits and withdrawals are disabled.',Activity:'Transaction and task history placeholder.',Profile:'Profile settings placeholder.'}[active]}</p><button className="gold-btn" onClick={()=>setActive('Home')}>← Back to dashboard</button></article>}
      <footer>© 2026 ASTRAVELLE <span>DEMO BUILD · NOT A LIVE PAYMENT APP</span></footer>
    </section>
  </main>;
}
