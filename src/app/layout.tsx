import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
    title: "Riftbound Deck Builder",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${cinzel.variable} antialiased flex min-h-screen flex-col`}
            >
                <Navbar />
                <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
                    {children}
                </main>
                <footer className="py-6 text-center text-sm text-gray-400">
                    All information presented on this site (including card
                    images and card text) is copyright Riot Games. <br /> This
                    website is not produced by, supported by, or affiliated with
                    Riot Games.
                </footer>
            </body>
        </html>
    );
}
