"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    author: string;
    datePublished: string;
    imageUrl: string;
    detailUrl: string;
    alt: string;
    className?: ClassNameValue;
}

export const Blog: FC<Props> = (params) => {
    const { title, author, datePublished, detailUrl, imageUrl, alt, className } = params;
    const parseDate = dayjs(datePublished).format("ddd MM, YYYY");
    return (
        <div
            className={cn(
                `relative flex flex-col gap-5 p-2 bg-white rounded-md transition-all hover:opacity-100 ${
                    className && className
                } cursor-pointer`
            )}
        >
            <div className="relative">
                <Image
                    src={"https://lethamduong.edu.vn/wp-content/uploads/2021/12/quan-tri-rui-ro-980x549.webp"}
                    alt={alt}
                    width={340}
                    height={340}
                    className="w-full object-cover rounded-md"
                />
                <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full rounded-md transition-all ease-in-out duration-400 scale-100 bg-[rgba(0,26,87,0.5)] opacity-0 hover:opacity-100">
                    <Link
                        href={detailUrl}
                        className="px-5 py-2 top-[20%] left-[25%] bg-white text-primary-dark hover:text-white hover:bg-blue-950 rounded-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
            <Link href={detailUrl} className="text-lg font-semibold px-5">
                {title}
            </Link>
            <div className="font-semibold text-base text-primary px-5 mt-3">{parseDate}</div>
            {/* <Button size={"lg"} variant={"outline"}>
                Xem chi tiết
            </Button> */}
        </div>
    );
};
