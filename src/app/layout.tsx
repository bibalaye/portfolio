import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuration des polices avec display swap pour un meilleur CLS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export const metadata: Metadata = {
  title: "Abiboulaye Sy | Développeur Full Stack",
  description: "Portfolio professionnel d'Abiboulaye Sy, développeur Full Stack spécialisé en React, Next.js, Node.js et TypeScript. Découvrez mes projets et compétences.",
  keywords: [
    "Abiboulaye Sy",
    "Développeur Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Abiboulaye Sy" }],
  creator: "Abiboulaye Sy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`
          antialiased
          bg-gray-900
          selection:bg-indigo-500/20 
          selection:text-indigo-400 
          overflow-x-hidden
          min-h-screen
          font-sans
        `}
      >
        <div className="relative">
          {/* Fond animé global */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)' }}></div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Grain overlay */}
          <div 
            className="pointer-events-none fixed inset-0 z-30 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </body>
    </html>
  );
}
