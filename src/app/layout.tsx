import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filtermax",
  description: "Filtermax PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
