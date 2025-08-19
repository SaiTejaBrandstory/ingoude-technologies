import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ingoude Technologies - Innovative Technology Solutions",
  description: "Empowering businesses with innovative technology solutions. Discover our features, explore our products, and find the perfect pricing plan for your needs.",
  icons: {
    icon: "/ingoude-technologies-logo.svg",
    shortcut: "/ingoude-technologies-logo.svg",
    apple: "/ingoude-technologies-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
