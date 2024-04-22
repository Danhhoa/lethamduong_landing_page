import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./positisions/Footer";
import { Header } from "./positisions/Header";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "VVM | Vietnam Moving",
        template: "%s | Vietnam Moving",
    },
    description:
        "Ứng dụng di động mới của Vietnam Moving - Cung cấp dịch vụ vận chuyển tốt nhất với chi phí thấp trong và ngoài nước",
    keywords: [
        "Vietnam Moving",
        "VNM",
        "VietnamMoving",
        "Vận chuyển",
        "van chuyen",
        "Vận chuyển nhanh",
        "Vận chuyển trong nước",
        "Giao Hàng",
        "giao hang",
        "Ship",
    ],
    alternates: { canonical: baseUrl },
    openGraph: {
        title: "VVM | Vietnam Moving",
        description:
            "Ứng dụng di động mới của Vietnam Moving - Cung cấp dịch vụ vận chuyển tốt nhất với chi phí thấp trong và ngoài nước",
    },
    twitter: {
        card: "summary_large_image",
        title: "VVM | Vietnam Moving",
        description:
            "Ứng dụng di động mới của Vietnam Moving - Cung cấp dịch vụ vận chuyển tốt nhất với chi phí thấp trong và ngoài nước",
    },
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
