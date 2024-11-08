"use client";

import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";

interface Props {
    id: number;
    title: string;
    content: string;
    author: string;
    datePublished: string;
    imageUrl: string;
    detailUrl: string;
    alt: string;
    className?: ClassNameValue;
}

export const Blog: FC<Props> = (params) => {
    const { id, title, content, author, datePublished, detailUrl, imageUrl, alt, className } = params;
    const parseDate = dayjs(datePublished).format("ddd MM, YYYY");
    const url = `/bai-viet/${detailUrl}?id=${id}`;
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
                    src={imageUrl}
                    alt={alt}
                    width={340}
                    height={340}
                    className="w-full lg:min-h-[150px] min-h-[180px] object-cover rounded-md"
                />
                <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full rounded-md transition-all ease-in-out duration-400 scale-100 bg-[rgba(0,26,87,0.5)] opacity-0 hover:opacity-100">
                    <Link
                        href={url}
                        className="px-5 py-2 top-[20%] left-[25%] bg-white text-primary-dark hover:text-white hover:bg-blue-950 rounded-lg"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
            <Link href={url} className="text-lg font-semibold px-5 line-clamp-3">
                {title}
            </Link>
            {parseDate && <div className="font-semibold text-base text-primary px-5 mt-3">{parseDate}</div>}
        </div>
    );
};
