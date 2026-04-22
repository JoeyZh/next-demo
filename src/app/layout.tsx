import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Demo 0422",
  description: "A demo project with DNDKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
