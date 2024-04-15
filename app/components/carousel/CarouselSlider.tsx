import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { DotButton } from "./CarouselButton";

interface Props {
    slides: Array<{ imageUrl: string; text: string; footer?: ReactNode }>;
    options?: EmblaOptionsType;
}

export const CarouselSlider: FC<Props> = ({ slides, options }) => {
    // // const [isPlaying, setIsPlaying] = useState(false);
    // // const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000 })]);
    // const [emblaRef, emblaApi] = useEmblaCarousel(options);
    // const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    // const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    // // useEffect(() => {
    // //     const autoplay = emblaApi?.plugins()?.autoplay;
    // //     if (!autoplay) return;

    // //     setIsPlaying(autoplay.isPlaying());
    // //     emblaApi
    // //         .on("autoplay:play", () => setIsPlaying(true))
    // //         .on("autoplay:stop", () => setIsPlaying(false))
    // //         .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
    // // }, [emblaApi]);

    // // console.log({ isPlaying });

    // const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
    // const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    //     console.log("***", emblaApi.scrollSnapList());

    //     setScrollSnaps(emblaApi.scrollSnapList());
    // }, []);

    // const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    //     setSelectedIndex(emblaApi.selectedScrollSnap());
    //     setPrevBtnDisabled(!emblaApi.canScrollPrev());
    //     setNextBtnDisabled(!emblaApi.canScrollNext());
    // }, []);

    // useEffect(() => {
    //     if (!emblaApi) return;

    //     console.log("run");

    //     onInit(emblaApi);
    //     onSelect(emblaApi);
    //     emblaApi.on("reInit", onInit);
    //     emblaApi.on("reInit", onSelect);
    //     emblaApi.on("select", onSelect);
    // }, [emblaApi, onInit, onSelect]);

    // console.log(scrollSnaps);

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-sm"
            // ref={emblaRef}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <>
                        <CarouselItem key={`${slide.imageUrl}-${index}`} className="">
                            <div className="p-1">
                                <Image src={slide.imageUrl} alt="" width={375} height={500} className="h-auto" />
                            </div>
                            <p className="text-center text-blue-700 text-xl px-10">{slide.text}</p>
                        </CarouselItem>
                    </>
                ))}
            </CarouselContent>

            {/* <div
                style={{
                    backgroundColor: "transparent",
                    touchAction: "manipulation",
                    cursor: "pointer",
                    border: 0,
                    padding: 0,
                    margin: 0,
                }}
            >
                {scrollSnaps.map((_, index) => (
                    <DotButton key={index} onClick={() => scrollTo(index)} />
                ))}
            </div> */}
        </Carousel>
    );
};
