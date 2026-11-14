import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  variable: "--font-sans",
  src: [
    { path: "../fonts/space-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/space-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/space-grotesk-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});
const mono = localFont({
  variable: "--font-mono",
  src: [
    { path: "../fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

const title = "Uiri | What happens when you type a URL";
const description =
  "Follow one request from your address bar through DNS, TCP, TLS, a CDN edge and a submarine cable under the Atlantic, then back to a rendered page. In 3D, in 1.2 seconds.";

export const metadata: Metadata = {
  // share cards need absolute URLs: explicit override, else Vercel's production domain, else local dev
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  ),
  title,
  description,
  openGraph: { title, description, images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "A packet crossing the Atlantic on the Dunant cable" }], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#080610", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
