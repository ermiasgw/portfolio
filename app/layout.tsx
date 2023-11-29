import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firacode.variable}>
      <body>{children}</body>
    </html>
  );
}
