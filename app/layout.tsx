import "./globals.css";

export const metadata = {
  title: "HoloAI",
  description: "AI Hologram Assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
