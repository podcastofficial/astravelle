
"use client";

import { useState } from "react";

const navigation = [
  { name: "Overview", icon: "◫" },
  { name: "Earn rewards", icon: "✳" },
  { name: "Referrals", icon: "♧" },
  { name: "Wallet", icon: "◇" },
  { name: "Leaderboard", icon: "♜" }
];

const tasks = [
  { icon: "✈", title: "Join our Telegram channel", detail: "Community task", reward: 250, color: "blue" },
  { icon: "◎", title: "Follow our updates", detail: "Social task", reward: 150, color: "purple" },
  { icon: "◈", title: "Explore the ecosystem", detail: "Discovery task", reward: 100, color: "green" }
];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [claimed, setClaimed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function navigate(name: string) {
    setActive(name);
    setMenuOpen(false);
    setNotice(
      name === "Overview"
        ? ""
        : `${name} preview selected. Account features will be connected in the next development step.`
    );
  }

  return (
    <main className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <a className="brand" href="#" onClick={() => navigate("Overview")}>
          <span className="brand-mark">A</span>
          <span>
            <strong>astravelle</strong>
            <small>REWARDS ECOSYSTEM</small>
          </span>
        </a>

        <div className="nav-label">WORKSPACE</div>
        <nav className="navigation">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${active === item.name ? "nav-active" : ""}`}
              onClick={() => navigate(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
              {item.name === "Earn rewards" && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">✦</div>
            <strong>Your next milestone</strong>
            <p>Keep exploring to discover new ways to earn.</p>
            <button onClick={() => navigate("Earn rewards")}>Explore tasks ↗</button>
          </div>
          <div className="sidebar-footer">
            <span className="status-dot" /> Ecosystem preview
            <span className="version">v1.0</span>
          </div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button
            className="mobile-menu icon-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <div className="breadcrumb">
            Workspace <span>/</span> <strong>{active}</strong>
          </div>
          <div className="topbar-right">
            <span className="preview-pill"><span /> Preview mode</span>
            <button
              className="avatar"
              onClick={() => setNotice("Profile settings will be connected after authentication is implemented.")}
              aria-label="Open profile"
            >
              U
            </button>
          </div>
        </header>

        <div className="content">
          <div className="welcome-row">
            <div>
              <div className="eyebrow"><span className="sparkle">✦</span> YOUR REWARDS, REIMAGINED</div>
              <h1>{active === "Overview" ? "Welcome to Astravelle" : active}</h1>
              <p className="subheading">
                {active === "Overview"
                  ? "Your journey starts here. Discover, participate and grow."
                  : `Explore your ${active.toLowerCase()} workspace.`}
              </p>
            </div>
            <div className="date-chip">✧ &nbsp; MEMBER DASHBOARD</div>
          </div>

          {notice && (
            <div className="notice">
              <span>{notice}</span>
              <button onClick={() => setNotice("")} aria-label="Dismiss">×</button>
            </div>
          )}

          <section className="stats-grid">
            <article className="stat-card balance-card">
              <div className="stat-top">
                <span>AVAILABLE POINTS</span>
                <span className="stat-icon gold-icon">✧</span>
              </div>
              <div className="stat-number">0 <span>PTS</span></div>
              <div className="stat-foot"><span className="neutral-tag">Getting started</span> Your rewards balance</div>
              <div className="balance-decoration">A</div>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>TOTAL EARNED</span>
                <span className="stat-icon green-icon">↗</span>
              </div>
              <div className="stat-number">0 <span>PTS</span></div>
              <div className="stat-foot"><span className="muted">Lifetime rewards</span></div>
              <div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>SUCCESSFUL REFERRALS</span>
                <span className="stat-icon purple-icon">♧</span>
              </div>
              <div className="stat-number">0</div>
              <div className="stat-foot"><span className="muted">Your network is waiting</span></div>
              <div className="referral-decoration">◎</div>
            </article>
          </section>

          <section className="feature-grid">
            <article className="daily-card">
              <div className="daily-glow" />
              <div className="daily-content">
                <div className="daily-label"><span>✦</span> DAILY REWARD</div>
                <h2>A little progress,<br />every single day.</h2>
                <p>Come back daily to build your streak and unlock rewards.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    if (!claimed) {
                      setClaimed(true);
                      setNotice("Demo only: daily reward is not credited. Backend verification will be added later.");
                    }
                  }}
                >
                  {claimed ? "Preview claimed ✓" : "Claim daily reward"} <span>→</span>
                </button>
              </div>
              <div className="daily-art" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="coin coin-back">✦</div>
                <div className="coin coin-front">A</div>
                <div className="coin coin-small">✧</div>
              </div>
              <div className="daily-footer"><span>◷ &nbsp; Daily availability</span><span>Streak rewards coming soon</span></div>
            </article>

            <article className="quick-card">
              <div className="section-heading">
                <div><h3>Quick actions</h3><p>Make your next move</p></div>
                <span className="heading-symbol">↗</span>
              </div>
              <button className="quick-action" onClick={() => navigate("Earn rewards")}>
                <span className="action-icon action-green">✳</span>
                <span className="action-copy"><strong>Explore tasks</strong><small>Discover available rewards</small></span>
                <span className="action-arrow">↗</span>
              </button>
              <button className="quick-action" onClick={() => navigate("Referrals")}>
                <span className="action-icon action-purple">♧</span>
                <span className="action-copy"><strong>Invite friends</strong><small>Grow your referral network</small></span>
                <span className="action-arrow">↗</span>
              </button>
              <button className="quick-action" onClick={() => navigate("Wallet")}>
                <span className="action-icon action-gold">◇</span>
                <span className="action-copy"><strong>Open wallet</strong><small>View balance and activity</small></span>
                <span className="action-arrow">↗</span>
              </button>
            </article>
          </section>

          <section className="lower-grid">
            <article className="panel tasks-panel">
              <div className="section-heading">
                <div><h3>Ways to earn</h3><p>Explore opportunities in the ecosystem</p></div>
                <button className="text-link" onClick={() => navigate("Earn rewards")}>View all ↗</button>
              </div>
              <div className="task-list">
                {tasks.map((task) => (
                  <div className="task-row" key={task.title}>
                    <div className={`task-icon ${task.color}`}>{task.icon}</div>
                    <div className="task-copy"><strong>{task.title}</strong><small>{task.detail}</small></div>
                    <div className="task-reward">+{task.reward} <span>PTS</span></div>
                    <button className="task-button" onClick={() => setNotice("Demo task only. Rewards will be issued after server-side task verification is implemented.")}>View</button>
                  </div>
                ))}
              </div>
              <div className="panel-note"><span>ⓘ</span> Tasks shown are illustrative. No points are issued in preview mode.</div>
            </article>

            <article className="panel activity-panel">
              <div className="section-heading">
                <div><h3>Recent activity</h3><p>Your latest reward movements</p></div>
                <span className="activity-symbol">◷</span>
              </div>
              <div className="empty-state">
                <div className="empty-icon">↕</div>
                <strong>No activity yet</strong>
                <p>Your verified transactions will appear here when the account system is connected.</p>
                <button className="text-link" onClick={() => navigate("Earn rewards")}>Explore rewards →</button>
              </div>
            </article>
          </section>

          <footer className="page-footer">
            <span>© 2026 Astravelle. Built for the rewards economy.</span>
            <span><i /> Secure-by-design development in progress</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
