import { FC, ReactNode, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import { useDimension } from "@/app/hooks/useDimension";
import "./style.css";

interface Props {
    slides: Array<ReactNode>;
}

export const SliderCpn: FC<Props> = (props) => {
    const { slides } = props;
    const [activeIndex, setActiveIndex] = useState(1);
    const { isMobile } = useDimension();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        // autoplay: true,
    };

    return (
        <div className="w-full">
            <Slider
                {...settings}
                beforeChange={(currentSlide, nexSlide) => {
                    console.log({ currentSlide, nexSlide });
                    const goNext = nexSlide > currentSlide;
                    const activeIndex = nexSlide + 1 !== slides.length ? nexSlide + 1 : 0;
                    setActiveIndex((prev) => (prev >= slides.length - 1 && goNext ? 0 : activeIndex));
                }}
                useCSS
                useTransform
                {...(isMobile && { nextArrow: <></> })}
                {...(isMobile && { prevArrow: <></> })}
            >
                {props.slides.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={cn("lg:w-[30%] w-full duration-500 transition-all  ease-out lg:py-10", {
                                "lg:scale-90": index !== activeIndex,
                                "lg:scale-110":
                                    index == activeIndex || (activeIndex === props.slides.length && index == 0), //WTF I'm doing here????
                                "transform-3d-ltr":
                                    !isMobile &&
                                    (index > activeIndex || (activeIndex === slides.length - 1 && index == 0)),
                                "transform-3d-rtl":
                                    !isMobile &&
                                    (index == 0 && activeIndex === slides.length - 1
                                        ? false
                                        : index < activeIndex || (activeIndex === 0 && index === slides.length - 1)),
                            })}
                        >
                            {slide}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
