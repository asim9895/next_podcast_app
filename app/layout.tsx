import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "@/constants/icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcast with AI",
  icons: {
    icon: icons.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
