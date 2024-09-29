"use client";
import { cn } from "@/lib/utils";
import { Blog } from "../../components/Blog";
import { CarouselSlider } from "../../components/carousel/CarouselSlider";

export const News = () => {
    const data = [
        {
            imageUrl: "/phones/phone-1.png",
            text: "Hoàn Thành Lớp Học “Quản Trị Rủi Ro Trong Kinh Doanh” Online Trên Zoom – 16 & 17/10/2021",
            author: "Cong Trong",
            datePublished: "10-10-2019",
            detailUrl: "https://google.com",
        },
        {
            imageUrl: "/phones/phone-2.png",
            text: "Hoàn Thành Lớp Học “Quản Trị Rủi Ro Trong Kinh Doanh” Online Trên Zoom – 16 & 17/10/2021",
            author: "Cong Trong",
            datePublished: "10-10-2019",
            detailUrl: "https://google.com",
        },
        {
            imageUrl: "/phones/phone-3.png",
            text: "Hoàn Thành Lớp Học “Quản Trị Rủi Ro Trong Kinh Doanh” Online Trên Zoom – 16 & 17/10/2021",
            author: "Cong Trong",
            datePublished: "10-10-2019",
            detailUrl: "https://google.com",
        },
        {
            imageUrl: "/phones/phone-4.png",
            text: "Hoàn Thành Lớp Học “Quản Trị Rủi Ro Trong Kinh Doanh” Online Trên Zoom – 16 & 17/10/2021",
            author: "Cong Trong",
            datePublished: "10-10-2019",
            detailUrl: "https://google.com",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center mt-20 py-10 gap-5 bg-light-90">
            <h2 className="md:text-4xl text-2xl font-semibold">Tin Tức</h2>
            <div className="mx-auto lg:px-20 px-5 md:max-w-5xl max-w-sm">
                <CarouselSlider
                    slides={data.map((item, index) => {
                        return (
                            <Blog
                                key={item.text + index}
                                title={item.text}
                                imageUrl={item.imageUrl}
                                alt={item.text}
                                author={item.author}
                                datePublished={item.datePublished}
                                detailUrl={item.detailUrl}
                            />
                        );
                    })}
                />
            </div>
        </div>
    );
};
