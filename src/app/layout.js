import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SIMON DEV | Software and AI Developer Portfolio",
  description:
    "Advanced AI-powered developer specializing in AI and Full Stack development. Expert in React, Python, machine learning, and innovative technology solutions.",
  keywords: [
    "AI developer",
    "machine learning engineer",
    "neural networks",
    "quantum computing",
    "React developer",
    "Python AI",
    "software architect",
    "deep learning",
    "computer vision",
    "full-stack developer",
  ].join(", "),
  authors: [{ name: "Optimus Dev" }],
  creator: "Optimus Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optimus-dev-portfolio.vercel.app",
    title: "SIMON DEV | AI Developer Portfolio",
    description:
      "Advanced AI-powered developer with expertise in Software Development and AI",
    siteName: "SIMON Dev Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIMON Dev - AI/SOFTWARE Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OPTIMUS DEV | AI Developer Portfolio",
    description:
      "Advanced AI-powered developer with expertise in Software Development and AI",
    creator: "@optimusdev",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0066cc" },
    { media: "(prefers-color-scheme: dark)", color: "#00d4ff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} antialiased bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen`}
      >
        {/* Loading animation */}
        <div
          id="loading-screen"
          className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-50 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🤖</div>
            <div className="text-2xl font-bold gradient-text animate-pulse">
              OPTIMUS DEV
            </div>
            <div className="w-32 h-1 bg-electric-gradient rounded-full mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>

        {/* Main content */}
        <main>{children}</main>

        {/* Loading script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                  loadingScreen.style.opacity = '0';
                  loadingScreen.style.transition = 'opacity 0.5s ease-out';
                  setTimeout(() => {
                    loadingScreen.style.display = 'none';
                  }, 500);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
