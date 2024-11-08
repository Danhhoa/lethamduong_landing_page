import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { FC, ReactNode, useEffect, useState } from "react";
import { DotButton } from "./CarouselButton";
import { cn } from "@/lib/utils";
import { useDimension } from "@/app/hooks/useDimension";
import "./style.css";

interface Props {
    slides: Array<ReactNode>;
    options?: EmblaOptionsType;
}

export const CarouselSlider: FC<Props> = ({ slides, options = {} }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(1);
    const [current2, setCurrent2] = useState<number>(-1);
    const [count, setCount] = useState(0);
    const { isMobile } = useDimension();

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setActiveIndex(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setActiveIndex(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    useEffect(() => {
        if (!api) {
            return;
        }
        api.scrollTo(current2);

        if ((api?.plugins() as any)?.autoplay?.isPlaying()) {
            (api?.plugins() as any)?.autoplay?.stop();
        }
    }, [current2]);

    const cssTransform = (index: number) => {
        if (isMobile || index === activeIndex) {
            return "";
        }

        const result =
            index < activeIndex
                ? "perspective(300px) rotateY(30deg) scale(0.75)"
                : "perspective(300px) rotateY(-30deg) scale(0.75)";

        return result;
    };

    const cssTransform2 = (index: number) => {
        if (isMobile) return "";

        if (index === activeIndex - 1) {
            return "scale(1.1)";
        } else if (index === activeIndex) {
            return "scale(1.25)";
        } else if (index === activeIndex + 1) {
            return "scale(1.1)";
        } else {
            return "scale(0.9)";
        }
    };

    // console.log("@@@", { activeIndex, slides: slides.length });

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
                active: true,
            }}
            className="w-full"
            setApi={setApi}
        >
            <CarouselContent className="transition-all duration-200 ease-out lg:py-10 ">
                {slides.map((slide, index) => (
                    <CarouselItem
                        key={index}
                        className={cn("lg:basis-1/3 duration-500", {
                            "lg:scale-110": activeIndex == index,
                            "lg:scale-90": activeIndex !== index,
                            // "transform-3d-ltr": index > activeIndex && index !== slides.length - 1,
                            // "transform-3d-rtl": index < activeIndex,
                        })}
                        style={
                            {
                                // transform:
                                //     index < indexScale
                                //         ? "perspective(300px) rotateY(30deg) scale(0.75)"
                                //         : "perspective(300px) rotateY(-30deg) scale(0.75)",
                                // transform: cssTransform(index),
                                // transform: "perspective(300px) rotateY(30deg) scale(0.75)",
                                // transform: cssTransform(index),
                            }
                        }
                    >
                        <>
                            <div>{index}</div>
                            {slide}
                        </>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="relative flex gap-3 items-center justify-center mt-10">
                {Array.from(Array(count).keys()).map((_, index) => (
                    <DotButton
                        key={index}
                        aria-label="slider button"
                        onClick={() => setCurrent2(index)}
                        active={index === activeIndex - 1}
                    />
                ))}
            </div>
        </Carousel>
    );
};
