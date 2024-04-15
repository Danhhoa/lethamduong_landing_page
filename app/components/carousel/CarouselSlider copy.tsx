import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { forwardRef, HTMLAttributes, useState, useCallback, useEffect } from "react";

export const CarouselDots = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ playOnInit: true, delay: 2000 })]);
    const [updateState, setUpdateState] = useState(false);
    const toggleUpdateState = useCallback(() => setUpdateState((prevState) => !prevState), []);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", toggleUpdateState);
            emblaApi.on("reInit", toggleUpdateState);

            return () => {
                emblaApi.off("select", toggleUpdateState);
                emblaApi.off("reInit", toggleUpdateState);
            };
        }
    }, [emblaApi, toggleUpdateState]);

    console.log(emblaApi);

    const numberOfSlides = emblaApi?.scrollSnapList().length || 0;
    const currentSlide = emblaApi?.selectedScrollSnap() || 0;

    if (numberOfSlides > 1) {
        return (
            <div ref={ref} className={`flex justify-center ${props.className}`}>
                {Array.from({ length: numberOfSlides }, (_, i) => (
                    <Button
                        key={i}
                        className={`mx-1 h-1.5 w-1.5 rounded-full p-0 ${
                            i === currentSlide
                                ? "scale-125 transform bg-gray-500 hover:bg-gray-500"
                                : "bg-gray-300 hover:bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => emblaApi?.scrollTo(i)}
                    />
                ))}
            </div>
        );
    } else {
        return <></>;
    }
});
CarouselDots.displayName = "CarouselDots";
