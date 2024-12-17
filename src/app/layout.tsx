import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { ticketsPath } from "@/paths";
import { homePath } from "@/paths";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TAC",
  description: "My Road to Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <nav>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div>
            <Link href={homePath()} className="text-lg font-bold">Home</Link>
          </div>
          <div>
            <Link href={ticketsPath()} className="text-sm underline">Tickets</Link>
          </div>
          <main className="py-24 px-8">{children}</main>
        </body>
      </nav>
    </html>
  );
}
