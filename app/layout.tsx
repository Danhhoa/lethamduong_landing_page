import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./positisions/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VVM",
    description: "By danhhoa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth scroll-mt-24">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
