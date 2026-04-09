import type { Metadata } from "next";
import { Cinzel_Decorative, Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Header from "../components/Header";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Leon-Link",
  description: "The Arena - Personal Gaming Style Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="spartan">
      <body
        className={`${cinzel.variable} ${rajdhani.variable} ${orbitron.variable} antialiased`}
        style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}