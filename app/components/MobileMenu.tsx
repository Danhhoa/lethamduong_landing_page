"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
    const [openMennu, setOpenMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMenu(!openMennu);
    };

    return (
        <>
            <Image src="/icons/hambuger.svg" alt="" width={32} height={32} onClick={toggleMobileMenu} />
            <div
                className={cn(
                    "fixed top-0 left-0 lg:w-[70%] w-full z-30 backdrop-sepia-0 bg-white/[97%] py-5 h-full overflow-y-scroll ease-in-out duration-300",
                    { "translate-x-0": openMennu, "translate-x-full": !openMennu }
                )}
            >
                <div className="flex justify-end mb-5 mr-5 flex-1">
                    <Image src={"/icons/cross.svg"} alt="" width={32} height={32} onClick={toggleMobileMenu} />
                </div>
                <div className="flex flex-col justify-center items-center text-xl gap-8">
                    <Link href={"gioi-thieu"} aria-label="Đi đến trang thới thiệu" onClick={toggleMobileMenu}>
                        Giới Thiệu
                    </Link>
                    <Link href={"dao-tao"} aria-label="Đi đến trang đào tạo" onClick={toggleMobileMenu}>
                        Lịch Đào Tạo
                    </Link>
                    <Link href={"lien-he"} aria-label="Đi đến trang liên hệ" onClick={toggleMobileMenu}>
                        Liên Hệ
                    </Link>
                    <div className="mx-auto w-[80%] h-0.5 bg-slate-400 mt-20" />
                    <div className="flex gap-5 justify-center items-center">
                        <Link href={"https://www.facebook.com/lethamduong.edu.vn"} target="_blank">
                            <Image src={"/icons/facebook.png"} alt="facebook-icon" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.youtube.com/c/lethamduongeduvn"} target="_blank">
                            <Image src={"/icons/video.png"} alt="youtube-icon" width={30} height={30} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
