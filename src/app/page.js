
export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080d0c",
      color: "#d7ef9b",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Astravelle</h1>
      <p>Dashboard is running.</p>
      <a href="/admin" style={{ color: "#d7ef9b" }}>
        Open Admin Panel
      </a>
    </main>
  );
}
