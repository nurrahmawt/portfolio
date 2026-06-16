import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nur Rahmawati | Portfolio",
  description: "AI & Data Portfolio",
  icons: {
    icon: "/image/icon.png",
  },
  authors: [{ name: "Nur Rahmawati" }],
  keywords: ["AI", "Machine Learning", "Data Science", "Portfolio"],
  openGraph: {
    title: "Nur Rahmawati | Portfolio",
    description: "AI & Data Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}