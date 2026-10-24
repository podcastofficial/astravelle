
export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080d0c",
        color: "#d7ef9b",
        padding: "28px 18px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Astravelle Admin</h1>
      <p>Admin panel page is running.</p>

      <section
        style={{
          background: "#141b17",
          border: "1px solid #34452d",
          borderRadius: "12px",
          padding: "18px",
          marginTop: "24px",
        }}
      >
        <h2>Dashboard</h2>
        <p>Users: —</p>
        <p>Pending Deposits: —</p>
        <p>Pending Withdrawals: —</p>
        <p>Database: Not verified</p>
      </section>

      <a href="/" style={{ display: "inline-block", marginTop: "24px" }}>
        ← Back to Home
      </a>
    </main>
  );
}
