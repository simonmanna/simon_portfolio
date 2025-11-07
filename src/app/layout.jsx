import "./globals.css";

export const metadata = {
  title: "Vidapal Coffee Tech",
  description: "Brewing Innovation with Every Cup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
