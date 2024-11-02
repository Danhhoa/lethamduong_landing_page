"use client";

import { CourseCard } from "@/app/components/CourseCard";
import { PhoneContact } from "@/app/components/PhoneContact";
import { SkeletonCard } from "@/app/components/SkeletonCard";
import { LoadingSpinner } from "@/app/components/Spinner";
import { CollapsibleFilterControl } from "@/app/components/filter-controller/CollapsibleFilterControl";
import { Chrono } from "@/app/components/timeline/ChronoClient";
import useAxios from "@/app/hooks/useAxios";
import { getMediaUrl } from "@/app/utils/media";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

interface IFilterCourse {
    courseType: string[];
    locations: string[];
    rangeDate: { from: Date; to: Date };
}

export default function SheduleCoursePage({ params }: { params: { slug: string } }) {
    const [startYear, endYear] = params.slug.split("-");
    const startOfYear = dayjs().year(Number(startYear)).startOf("years").toDate();
    const endOfYear = dayjs().year(Number(endYear)).endOf("years").toDate();
    const [date, setDate] = useState<DateRange | undefined>({
        from: startOfYear,
        to: endOfYear,
    });
    const [openFilter, setOpenFilter] = useState(true);
    const [filter, setFilter] = useState<IFilterCourse>({
        courseType: ["2", "3"],
        locations: [],
        rangeDate: { from: startOfYear, to: endOfYear },
    });
    const [courseItems, setCourseItems] = useState();
    const [courseItems2, setCourseItems2] = useState();

    const { response: coursesType, loading } = useAxios<any>({
        method: "get",
        url: "https://cus-api.biiline.com/items/course_type",
    });

    const { response: courses, loading: courseLoading } = useAxios<any>({
        method: "get",
        url: "https://cus-api.biiline.com/items/courses?filter[status][_neq]=archived",
    });

    const locations = [
        {
            id: "1",
            name: "TP Hồ Chí Minh",
        },
        {
            id: "2",
            name: "Hà Nội",
        },
    ];

    useEffect(() => {
        if (!courses) {
            return;
        }
        console.log("rerender", filter);

        const courseItems = courses.filter((course: any) => filter.courseType.includes(course.type.key.toString()));

        const courseItems2 = courses
            .filter((course: any) => filter.courseType.includes(course.type.key.toString()))
            .map((course: any) => {
                return {
                    cardTitle: course?.name,
                    media: {
                        name: course?.name,
                        source: {
                            url: getMediaUrl(course.thumbnail),
                        },
                        type: "IMAGE",
                    },
                    cardDetailedText: getCourseCalendar(course),
                };
            });
        setCourseItems(courseItems);

        setCourseItems2(courseItems2);
    }, [filter, courses]);

    if (!courses) {
        return <LoadingSpinner size={50} parentClassName="w-screen h-screen mx-auto" />;
    }

    const getCourseCalendar = (course: any) => {
        const arrCalendarText = [];
        if (course?.hanoi_t_s && course?.hanoi_t_e) {
            arrCalendarText.push(
                `TP.Hà Nội: ${dayjs(course.hanoi_t_s).get("date")} & ${dayjs(course.hanoi_t_e).format("DD-MM-YYYY")}`
            );
        }

        if (course?.hcm_t_s && course?.hcm_t_e) {
            arrCalendarText.push(
                `TP.Hồ Chí Minh: ${dayjs(course.hcm_t_s).get("date")} & ${dayjs(course.hcm_t_e).format("DD-MM-YYYY")}`
            );
        }

        return arrCalendarText;
    };

    console.log({ courseItems2 });

    const handleFilter = (data: any) => {
        setFilter((prev) => ({ ...prev, courseType: data }));
    };

    return (
        <div className="flex items-center lg:flex-row flex-col justify-center lg:py-20 bg-simple-white-3 bg-cover bg-center bg-no-repeat min-h-screen">
            <div
                className="fixed left-0 flex items-center justify-center top-[120px] h-20 w-8 bg-white rounded-e-lg shadow-lg cursor-pointer text-center hover:scale-125 transition-transform duration-300"
                onClick={() => setOpenFilter(!openFilter)}
            >
                <Image src={"/icons/setting-animate.gif"} alt="setting" width={50} height={50} unoptimized />
            </div>
            <div
                className={cn(
                    "lg:w-1/3 lg:flex sticky left-0 top-[120px] flex-col self-start z-50 transition-all ease-in-out duration-200",
                    {
                        "lg:w-0": !openFilter,
                    }
                )}
            >
                <div
                    className={cn(
                        "fixed max-w-1/3 lg:ml-20 lg:mt-0 ml-10 mt-10 bg-white rounded-lg px-4 divide-y-2 shadow-2xl opacity-0 transition-all ease-in-out duration-300 scale-0",
                        {
                            "opacity-100 scale-100": openFilter,
                        }
                    )}
                >
                    {/* Filters components */}
                    {loading ? (
                        <LoadingSpinner parentClassName="lg:min-w-[300px] lg:min-h-[450px] min-w-[200px] min-h-[400px]" />
                    ) : (
                        <>
                            <CollapsibleFilterControl
                                title="Chuyên đề"
                                content={coursesType}
                                titleIcon="/icons/education.png"
                                className="w-[350px] space-y-2 m-3 py-5"
                                onFilter={handleFilter}
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
                        </>
                    )}
                </div>
            </div>
            {/* Filters components */}

            {/* Timeline */}
            <div className={cn("lg:w-2/3 w-full p-5 self-end", { "lg:w-full": openFilter })}>
                {courseLoading ? (
                    <SkeletonCard />
                ) : (
                    <Chrono
                        items={courseItems2}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={300}
                        cardWidth={650}
                        mediaHeight={200}
                        contentDetailsHeight={100}
                        fontSizes={{
                            title: "1rem",
                        }}
                        disableToolbar={true}
                    >
                        {/* {courseItems?.map((course: any, index) => {
                            return (
                                <CourseCard
                                    key={course.id + index}
                                    src={getMediaUrl(course.thumbnail)}
                                    title={course.name}
                                    cardDetailedText={getCourseCalendar(course)}
                                ></CourseCard>
                            );
                        })} */}
                    </Chrono>
                )}
            </div>
            {/* Timeline */}

            <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
                <PhoneContact />
            </div>
        </div>
    );
}
