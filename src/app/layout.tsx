import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFL Mock Draft Simulator",
  description: "Build and run your own NFL mock drafts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
