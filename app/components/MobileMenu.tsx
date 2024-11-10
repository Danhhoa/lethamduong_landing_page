"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IResponseSchoolYear } from "../interfaces";
import useAxios from "../hooks/useAxios";
import { LoadingSpinner } from "./Spinner";

export const MobileMenu = () => {
    const [openMennu, setOpenMenu] = useState(false);
    const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMenu(!openMennu);
    };

    const {
        response: calendarSchoolYear,
        loading,
        error,
    } = useAxios<IResponseSchoolYear[]>({
        method: "get",
        url: "https://cus-api.biiline.com/items/school_year",
    });

    return (
        <>
            <Image src="/icons/hambuger.svg" alt="" width={32} height={32} onClick={toggleMobileMenu} />
            <div
                className={cn(
                    "fixed top-0 left-0 lg:w-[70%] w-full z-[100] backdrop-sepia-0 bg-white/[97%] py-5 h-full overflow-y-scroll ease-in-out duration-300",
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
                                    {loading ? (
                                        <LoadingSpinner />
                                    ) : calendarSchoolYear?.length ? (
                                        calendarSchoolYear.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/lich-dao-tao/${item.name}`}
                                                className="px-3 py-2 hover:bg-primary-light hover:text-white rounded-md transition-all duration-150 ease-linear"
                                                onClick={() => toggleMobileMenu()}
                                            >
                                                <p>{item.name.replace("-", " - ")}</p>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="text-sm font-light text-gray-400 text-center">Chưa có lịch</p>
                                    )}
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
