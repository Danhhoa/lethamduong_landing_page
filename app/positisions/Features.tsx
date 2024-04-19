"use client";

import Image from "next/image";
import { ScanToDownload } from "../components/ScanToDownload";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { cn } from "@/lib/utils";
import { CarouselSlider } from "../components/carousel/CarouselSlider";
import { CarouselDots } from "../components/carousel/CarouselSlider copy";

export const Features = () => {
    const data = [
        {
            imageUrl: "/phones/phone-1.png",
            text: "Cung cấp dịch vụ giao hàng đa dạng",
        },
        {
            imageUrl: "/phones/phone-2.png",
            text: "Giao nhận hàng tiện lợi với nhiều địa điểm ",
        },
        {
            imageUrl: "/phones/phone-3.png",
            text: "Quản lý đơn hàng hiệu quả và dễ dàng",
        },
        {
            imageUrl: "/phones/phone-4.png",
            text: "Tóm tắt thống kê trực quan đơn hàng",
        },
    ];
    return (
        <div
            id="features"
            className="lg:m-20 md:m-10 m-5 mt-10 font-bold bg-app-3 bg-cover bg-center bg-no-repeat scroll-mt-24"
        >
            <p className="uppercase text-primary tracking-widest">Tính năng ứng dụng</p>
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="flex flex-col basis-[60%] gap-3">
                    <p className=" lg:text-5xl text-4xl text-blue-800 font-black lg:leading-[67px] leading-[49px]">
                        Ứng dụng cung cấp bạn các dịch vụ với trải nghiệm tốt nhất từ Vietnam Moving
                    </p>
                    <p className="lg:max-w-[520px] text-lg font-normal text-gray-600">
                        Tận hưởng những trải nghiệm tốt và mới mẻ nhất về các dịch vụ ưu việt của Vietnam Moving bằng
                        cách tải về ứng dụng của chúng tôi trên App Store và Google Play Store
                    </p>
                    <div className="xl:max-w-[60%] md:max-w-[60%] max-w-full mt-20">
                        <ScanToDownload className="text-white bg-[#002439] max-h-[120px]" />
                    </div>
                </div>
                <div className="mx-auto">
                    <CarouselSlider slides={data} />
                    {/* <CarouselDots></CarouselDots> */}
                    {/* <Carousel autoSlide={false}>{[...data.map((s) => <img src={s.imageUrl} />)]}</Carousel> */}
                    {/* <Carousel
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            return (
                                <div
                                    key={index}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    className={cn(
                                        "inline-block mx-2 w-3 h-3 rounded-full mb-14",
                                        `${isSelected ? "bg-blue-700" : "bg-gray-400"}`
                                    )}
                                ></div>
                            );
                        }}
                    >
                        {data.map((item) => (
                            <>
                                <img src={item.imageUrl} alt="" />
                                <p className="text-blue-700 text-2xl px-10">{item.text}</p>
                            </>
                        ))}
                    </Carousel> */}
                </div>
            </div>
        </div>
    );
};
