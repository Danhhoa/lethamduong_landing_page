"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
    const [openMennu, setOpenMenu] = useState(false);
    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMenu(!openMennu);
    };

    const trainingCalendar = [
        {
            href: "/lich-dao-tao/2023-2024",
            title: "2023 - 2024",
            icon: "/icons/online-education.png",
        },
        {
            href: "/lich-dao-tao/2024-2025",
            title: "2024 - 2025",
            icon: "/icons/online-education-2.png",
        },
    ];

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
                <div className="flex flex-col justify-center items-center self-start text-xl gap-8">
                    <Link href={"gioi-thieu"} aria-label="Đi đến trang thới thiệu" onClick={toggleMobileMenu}>
                        Giới Thiệu
                    </Link>
                    <div className="flex flex-col">
                        <Collapsible
                            open={isCollapsibleOpen}
                            onOpenChange={() => setIsCollapsibleOpen(!isCollapsibleOpen)}
                            className={`w-full transition-all`}
                        >
                            <div className="flex items-center justify-between space-x-4">
                                <CollapsibleTrigger asChild onClick={() => setIsCollapsibleOpen(!isCollapsibleOpen)}>
                                    <div className="flex items-center justify-center gap-3">
                                        <h4 className="">{"Lịch đào tạo"}</h4>
                                        <Image
                                            src={"/icons/chevron-down-black.svg"}
                                            alt=""
                                            width={16}
                                            height={16}
                                            className={cn("transition ease-in-out ", {
                                                "rotate-180": isCollapsibleOpen,
                                            })}
                                        />
                                    </div>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2 flex flex-col transition-all">
                                <ul className="flex flex-col gap-4 relative right-0 text-end">
                                    {trainingCalendar.map((item) => {
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="text-lg"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.title}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
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
