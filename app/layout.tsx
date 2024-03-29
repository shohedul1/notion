import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Yout Connected Workspace",
  description: "shohidul-Simple and powerful notes & docs for teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
