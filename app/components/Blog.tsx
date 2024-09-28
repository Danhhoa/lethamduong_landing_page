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
        <div className={cn(`flex flex-col gap-5 p-2 bg-white rounded-md transition-all ${className && className}`)}>
            <Image
                src={"https://lethamduong.edu.vn/wp-content/uploads/2021/12/quan-tri-rui-ro-980x549.webp"}
                alt={alt}
                width={340}
                height={340}
                className="w-full object-cover rounded-md"
            />
            <Link href={detailUrl} className="text-lg font-semibold px-5">
                {title}
            </Link>
            <div className="font-semibold text-lg text-primary px-5 mt-3">{`${author} | ${parseDate}`}</div>
            <Button size={"lg"} variant={"outline"}>
                Xem chi tiết
            </Button>
        </div>
    );
};
