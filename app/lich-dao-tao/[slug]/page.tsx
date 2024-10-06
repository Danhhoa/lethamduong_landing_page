"use client";

import { CollapsibleFilterControl } from "@/app/components/filter-controller/CollapsibleFilterControl";
import { Chrono } from "@/app/components/timeline/ChronoClient";
import { useDimension } from "@/app/hooks/useDimension";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function SheduleCoursePage({ params }: { params: { slug: string } }) {
    const [startYear, endYear] = params.slug.split("-");
    const [date, setDate] = useState<DateRange | undefined>({
        from: dayjs().year(Number(startYear)).startOf("years").toDate(),
        to: dayjs().year(Number(endYear)).endOf("years").toDate(),
    });
    const { isMobile } = useDimension();
    const [openControl, setOpenControl] = useState(false);

    const courses = [
        {
            id: "1",
            title: "Chuỗi chương trình quản trị kinh doanh",
        },
        {
            id: "2",
            title: "Chuỗi Chương Trình Chuyên Sâu Học Qua Zoom",
        },
        {
            id: "3",
            title: "Chuỗi Chương Trình Phát Triển Bản Thân",
        },
    ];

    const locations = [
        {
            id: "lo-1",
            title: "TP Hồ Chí Minh",
        },
        {
            id: "lo-2",
            title: "Hà Nội",
        },
    ];
    const items = [
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 1: Mô hình kinh doanh & Các nguyên lý quản trị bất biến",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
            url: "https://google.com",
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 2: Chiến lược kinh doanh – Xây dựng & vận hành",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 3: Lãnh đạo và các kỹ năng lãnh đạo",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 4: Xây dựng doanh nghiệp thực thi & đam mê khách hàng",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 5: Chiến lược nhân sự",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 6: Chiến lược tài chính",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 7: Chiến lược Marketing",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 8: Bán hàng chuyên nghiệp",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
        {
            title: "11 2023",
            cardTitle: "Chuyên đề 9: Xây dựng văn hóa doanh nghiệp",
            media: {
                name: "dunkirk beach",
                source: {
                    url: "https://lethamduong.edu.vn/wp-content/uploads/2023/10/1-Mô-Hình-Kinh-Doanh-Các-nguyên-lý-quản-trị-bất-biến.webp ",
                },
                type: "IMAGE",
            },
            cardDetailedText: ["TP. Hà Nội: 11 & 12/11/2023", "TP. Hồ Chí Minh: 18 & 19/11/2023"],
        },
    ];

    return (
        <div className="flex items-center lg:flex-row flex-col justify-center bg-light-90 mt-[100px] lg:py-20">
            <div
                className="fixed left-0 flex items-center justify-center top-[120px] h-20 w-8 bg-white rounded-e-lg shadow-lg cursor-pointer text-center hover:scale-125 transition-transform duration-300"
                onClick={() => setOpenControl(!openControl)}
            >
                <p className="[writing-mode:vertical-lr] rotate-180 text-sm">Lọc</p>
            </div>
            <div
                className={cn(
                    "lg:w-1/3 lg:flex sticky left-0 top-[120px] flex-col self-start z-50 transition-all ease-in-out duration-200",
                    {
                        "lg:w-0": openControl,
                    }
                )}
            >
                <div
                    className={cn(
                        "fixed max-w-1/3 lg:ml-20 lg:mt-0 ml-10 mt-10 bg-white rounded-lg px-4 divide-y-2 opacity-0 transition-all ease-in-out duration-300 scale-0",
                        {
                            "opacity-100 scale-100": !openControl,
                        }
                    )}
                >
                    <CollapsibleFilterControl
                        title="Chuyên đề"
                        content={courses}
                        titleIcon="/icons/education.png"
                        className="w-[350px] space-y-2 m-3 py-5"
                    />
                    <CollapsibleFilterControl
                        title="Vị trí"
                        titleIcon="/icons/location.png"
                        content={locations}
                        className="w-[350px] space-y-2 m-3 py-5"
                    />
                    <div className="m-3 py-5">
                        <div className="flex gap-3">
                            <Image src={"/icons/timetable.png"} alt="title-icon" width={20} height={20} />
                            <h4 className="text-sm font-semibold">Thời gian</h4>
                        </div>
                        <Popover>
                            <PopoverTrigger className="mt-3" asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {dayjs(date.from).format("DD-MM-YYYY")} -{" "}
                                                {dayjs(date.to).format("DD-MM-YYYY")}
                                            </>
                                        ) : (
                                            dayjs(date.from).format("DD-MM-YYYY")
                                        )
                                    ) : (
                                        <span>Chọn khoảng thời gian</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            <div className={cn("lg:w-2/3 w-full p-5 self-end", { "lg:w-full": openControl })}>
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={300}
                    cardWidth={650}
                    mediaHeight={200}
                    contentDetailsHeight={100}
                    fontSizes={{
                        title: "1rem",
                    }}
                    disableToolbar={true}
                    className={{ card: "fade-in-view-b2t in-view" }}
                    slideShowType={""}
                />
            </div>
        </div>
    );
}
