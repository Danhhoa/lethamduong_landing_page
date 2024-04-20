import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./positisions/Header";
import "./globals.css";
import { Footer } from "./positisions/Footer";
import Head from "next/head";
import Link from "next/link";

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
        <>
            <Head>
                <Link rel="icon" href={"/favicon.ico"}></Link>
            </Head>
            <html lang="en" className="scroll-smooth scroll-mt-24">
                <body className={inter.className}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
