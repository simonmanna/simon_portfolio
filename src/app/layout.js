export const metadata = {
  title: 'ByteBrew - Coffee & IT Solutions',
  description: 'Premium coffee and professional IT services for the modern tech professional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}