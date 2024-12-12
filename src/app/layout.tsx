import type { Metadata } from "next";
import "./globals.css";
import ProviderWrappers from "@/core/providers/wrapper";
import { getSession } from "@/core/auth/auth";

export const metadata: Metadata = {
  title: "Filtermax",
  description: "Filtermax PWA",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body
        className={`antialiased`}
      >
        <ProviderWrappers session={session}>
          {children}
        </ProviderWrappers>
      </body>
    </html>
  );
}
