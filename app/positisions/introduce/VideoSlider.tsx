"use client";

import { YoutubeVideoIframe } from "@/app/components/YoutubeVideoIframe";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

export const VideoSlider = () => {
    const data = [
        {
            src: "https://www.youtube.com/embed/D0ccqQe3c_s",
        },
        {
            src: "https://www.youtube.com/embed/pbWEXAkOTL0",
        },
        {
            src: "https://www.youtube.com/embed/xN_q9OjKBSA",
        },
    ];

    return (
        <div className="mx-auto max-w-5xl my-20">
            <h4 className="text-4xl font-bold text-center my-10">Các video phổ biến</h4>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
            >
                <CarouselContent className="">
                    {data.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="">
                                <YoutubeVideoIframe index={index} url={item.src} />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="lg:block hidden" />
                <CarouselNext className="lg:block hidden" />
            </Carousel>
        </div>
    );
};
