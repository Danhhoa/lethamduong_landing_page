"use client";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export const NewVideos = () => {
    const videos = [
        {
            url: "https://youtu.be/7JD1AuzKpG0",
            label: "Ngân hàng Nam Á",
            thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2024/07/19.-Nam-A-Bank.jpg",
        },
        {
            url: "https://youtu.be/7JD1AuzKpG0",
            label: "Dồng tháp",
            thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2024/07/9.-So-KHDT-Dong-Thap.jpg",
        },
        {
            url: "https://youtu.be/7JD1AuzKpG0",
            label: "MB Bank",
            thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2024/07/17.-MB.jpg",
        },
        {
            url: "https://youtu.be/7JD1AuzKpG0",
            label: "VICEM",
            thumbnail:
                "https://lethamduong.edu.vn/wp-content/uploads/2024/07/z5686138343892_8ef17b78230282deb66eeb240b53f1a8.jpg",
        },
    ];
    return (
        <div className="flex flex-col justify-center items-center gap-8 mt-20">
            <h2 className="font-semibold text-4xl max-w-[40%] text-center">
                Những video mới nhất của TS Lê Thẩm Dương
            </h2>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full xl:max-w-[58%]"
            >
                <CarouselContent className="">
                    {videos.map((video, index) => {
                        return (
                            <CarouselItem
                                key={`${video.url}-${index}`}
                                className="flex flex-col justify-center items-center lg:basis-1/3 md:basis-1/2 gap-4"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.label}
                                    width={1000}
                                    height={1000}
                                    className="object-contain max-w-[350px] rounded-2xl"
                                />
                                <span className="text-center font-semibold text-xl">{video.label}</span>
                                <Link
                                    href={video.url}
                                    className="bg-primary text-white text-center font-medium content-center rounded-md px-8 py-2"
                                >
                                    Xem video
                                </Link>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
