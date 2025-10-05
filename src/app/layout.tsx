import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  applicationName: "Hotlines PH",
  title: "Hotlines PH",
  description: "Philippines Emergency hotlines",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hotlines PH",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${font.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
