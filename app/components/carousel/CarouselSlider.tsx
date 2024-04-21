import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FC, ReactNode, useEffect, useState } from "react";
import { DotButton } from "./CarouselButton";

interface Props {
    slides: Array<{ imageUrl: string; text: string; footer?: ReactNode }>;
    options?: EmblaOptionsType;
}

export const CarouselSlider: FC<Props> = ({ slides, options = {} }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState<number>(-1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    useEffect(() => {
        if (!api) {
            return;
        }
        api.scrollTo(current2);

        if ((api?.plugins() as any)?.autoplay.isPlaying()) {
            (api?.plugins() as any)?.autoplay.stop();
        }
    }, [current2]);

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-sm"
            setApi={setApi}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={`${slide.imageUrl}-${index}`} className="">
                        <div className="">
                            <Image
                                src={slide.imageUrl}
                                alt={slide.text}
                                width={375}
                                height={500}
                                className="w-auto h-auto"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="relative flex gap-3 items-center justify-center top-[-40px]">
                {Array.from(Array(count).keys()).map((_, index) => (
                    <DotButton key={index} onClick={() => setCurrent2(index)} active={index === current - 1} />
                ))}
            </div>
            <p className="text-center text-blue-700 text-xl lg:px-10 px-5">{slides[current - 1]?.text}</p>
        </Carousel>
    );
};
