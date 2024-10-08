import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { FC, ReactNode, useEffect, useState } from "react";
import { DotButton } from "./CarouselButton";
import { cn } from "@/lib/utils";
import { useDimension } from "@/app/hooks/useDimension";

interface Props {
    slides: Array<ReactNode>;
    options?: EmblaOptionsType;
}

export const CarouselSlider: FC<Props> = ({ slides, options = {} }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState<number>(-1);
    const [count, setCount] = useState(0);
    const { isMobile } = useDimension();

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

    const indexScale = current;

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
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
            <CarouselContent className="transition-all duration-200 ease-out lg:py-10">
                {slides.map((slide, index) => (
                    <CarouselItem
                        key={index}
                        className={cn("lg:basis-1/3 duration-500", {
                            "lg:scale-110": indexScale === index,
                        })}
                        style={{
                            transform: !isMobile
                                ? index < indexScale
                                    ? "perspective(300px) rotateY(30deg) scale(0.75)"
                                    : index > indexScale
                                    ? "perspective(300px) rotateY(-30deg) scale(0.75)"
                                    : ""
                                : "",
                        }}
                    >
                        {slide}
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="relative flex gap-3 items-center justify-center mt-10">
                {Array.from(Array(count).keys()).map((_, index) => (
                    <DotButton
                        key={index}
                        aria-label="slider button"
                        onClick={() => setCurrent2(index)}
                        active={index === current - 1}
                    />
                ))}
            </div>
        </Carousel>
    );
};
