"use client";

import { YoutubeVideoIframe } from "@/app/components/YoutubeVideoIframe";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

export const VideoSlider = () => {
    // const [emblaRef, emblaApi] = useEmblaCarousel(undefined, [Autoplay({ playOnInit: true, delay: 3000 })]);
    const [isPlaying, setIsPlaying] = useState(false);
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

    const [api, setApi] = useState<CarouselApi>();

    const stopAutoPlay = () => {
        if ((api?.plugins() as any)?.autoplay.isPlaying()) {
            (api?.plugins() as any)?.autoplay.stop();
        }
    };

    const startAutoPlay = () => {
        if ((!api?.plugins() as any)?.autoplay.isPlaying()) {
            (api?.plugins() as any)?.autoplay.play();
        }
    };

    return (
        <div className="mx-auto max-w-5xl my-20">
            <h4 className="text-4xl font-bold text-center my-10">Các video phổ biến</h4>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 6000,
                        stopOnInteraction: false,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
                setApi={setApi}
            >
                <CarouselContent>
                    {data.map((item, index) => {
                        return (
                            <CarouselItem key={index}>
                                <YoutubeVideoIframe
                                    index={index}
                                    url={item.src}
                                    onPlayVideo={stopAutoPlay}
                                    onEndVideo={startAutoPlay}
                                    onPauseVideo={startAutoPlay}
                                />
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
