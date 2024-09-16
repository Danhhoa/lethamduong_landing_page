import type { Metadata } from "next";
import { Inter } from "next/font/google";
import envConfig from "./configs/env.config";
import "./globals.css";
import { Footer } from "./positisions/Footer";
import { Header } from "./positisions/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(envConfig.app.baseURL),
    // title: {
    //     default: "VVM | Vietnam Moving",
    //     template: "%s | Vietnam Moving",
    // },
    description: envConfig.seo.desc,
    keywords: envConfig.seo.keywords,
    alternates: { canonical: envConfig.app.baseURL },
    // openGraph: {
    //     title: "VVM | Vietnam Moving",
    //     description: envConfig.seo.desc,
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "VVM | Vietnam Moving",
    //     description: envConfig.seo.desc,
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
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
