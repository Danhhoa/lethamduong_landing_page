"use client";

import { Chrono } from "@/app/components/timeline/ChronoClient";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays } from "date-fns";
import dayjs from "dayjs";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function SheduleCoursePage({ params }: { params: { slug: string } }) {
    const [isOpen, setIsOpen] = useState(true);
    const [chooseCourse, setChooseCourse] = useState<number | null>(null);
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });

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

    const courses = [
        {
            title: "Chuỗi chương trình quản trị kinh doanh",
        },
        {
            title: "Chuỗi Chương Trình Chuyên Sâu Học Qua Zoom",
        },
        {
            title: "Chuỗi Chương Trình Phát Triển Bản Thân",
        },
    ];

    const locations = [
        {
            title: "TP Hồ Chí Minh",
        },
        {
            title: "Hà Nội",
        },
    ];

    return (
        <div className="flex items-center lg:flex-row flex-col justify-center bg-light-90 mt-[100px] py-20">
            <div className={`sticky left-0 flex flex-col self-start bg-white min-h-[500px] rounded-lg px-4 divide-y-2`}>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2 m-3 py-5">
                    <div className="flex items-center justify-between space-x-4">
                        <h4 className="text-sm font-semibold">Chuyên đề</h4>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-9 p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="space-y-2 flex flex-col gap-3">
                        {courses.map((course, index) => {
                            return (
                                <div key={index} className="ml-10 flex gap-4">
                                    <Checkbox
                                        id={index.toString()}
                                        onClick={() => {
                                            setChooseCourse(index);
                                        }}
                                        checked={index === chooseCourse}
                                    />
                                    <label
                                        htmlFor={index.toString()}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {course.title}
                                    </label>
                                </div>
                            );
                            return <div className="rounded-md border px-4 py-3 font-mono text-xs">{course.title}</div>;
                        })}
                    </CollapsibleContent>
                </Collapsible>

                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2 m-3 py-5">
                    <div className="flex items-center justify-between space-x-4">
                        <h4 className="text-sm font-semibold">Vị trí</h4>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-9 p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="space-y-2 flex flex-col gap-3">
                        {locations.map((localtion, index) => {
                            return (
                                <div key={index} className="ml-10 flex gap-4">
                                    <Checkbox
                                        id={index.toString()}
                                        onClick={() => {
                                            setChooseCourse(index);
                                        }}
                                        checked={index === chooseCourse}
                                    />
                                    <label
                                        htmlFor={index.toString()}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {localtion.title}
                                    </label>
                                </div>
                            );
                        })}
                    </CollapsibleContent>
                </Collapsible>
                <div className="m-3 py-5">
                    <h4 className="text-sm font-semibold">Khoảng thời gian</h4>
                    <Popover>
                        <PopoverTrigger className="mt-3" asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
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
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
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
            <div className="w-[1080px] p-5 self-end">
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
                />
            </div>
        </div>
    );
}
