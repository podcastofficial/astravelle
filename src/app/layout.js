
import "./globals.css";

export const metadata = {
  title: "Astravelle",
  description: "Astravelle user dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#080d0c",
          color: "#e7f0df",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
