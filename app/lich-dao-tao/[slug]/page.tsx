"use client";

import { CourseCard } from "@/app/components/CourseCard";
import { SkeletonCard } from "@/app/components/SkeletonCard";
import { LoadingSpinner } from "@/app/components/Spinner";
import { CollapsibleFilterControl } from "@/app/components/filter-controller/CollapsibleFilterControl";
import { PhoneContact } from "@/app/components/phone-contact/PhoneContact";
import { Chrono } from "@/app/components/timeline/ChronoClient";
import useAxios from "@/app/hooks/useAxios";
import { ICourseType, ICourses } from "@/app/interfaces";
import { getMediaUrl } from "@/app/utils/media";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

interface IFilterCourse {
    courseType: string[];
    locations: string[];
    rangeDate: { from: Date; to: Date };
}

export default function SheduleCoursePage({ params }: { params: { slug: string } }) {
    const [startYear, endYear] = params.slug.split("-");
    const today = dayjs().startOf("dates").toDate();
    const endOfYear = dayjs().year(Number(endYear)).endOf("years").toDate();
    const [date, setDate] = useState<DateRange | undefined>({
        from: today,
        to: endOfYear,
    });
    const [openControl, setOpenControl] = useState(true);
    const [filters, setFilters] = useState<IFilterCourse>({
        courseType: [],
        locations: ["1", "2"], // DEFAULT hcm and hanoi
        rangeDate: { from: today, to: endOfYear },
    });
    const [courseItems, setCourseItems] = useState<ICourses[]>();

    // Fetch data API
    const { response: coursesType, loading } = useAxios<ICourseType[]>({
        method: "get",
        url: "https://cus-api.biiline.com/items/course_type",
    });

    const { response: courses, loading: courseLoading } = useAxios<ICourses[]>({
        method: "get",
        url: "https://cus-api.biiline.com/items/courses?filter[status][_neq]=archived&sort[]=ordinal",
    });

    // Default object locations
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

        if (coursesType && !filters.courseType.length) {
            const defaultCourseType = coursesType.map((type: any) => type.id.toString());
            setFilters((prev) => ({ ...prev, courseType: defaultCourseType }));
        }

        setCourseItems(filterCourses());
    }, [filters, courses, coursesType, date]);

    if (!courses) {
        return <LoadingSpinner size={50} parentClassName="w-screen h-screen mx-auto" />;
    }

    const filterCourses = () => {
        let courseFiltered = courses;
        // Filter by type
        if (filters.courseType.length) {
            courseFiltered = courseFiltered.filter((course: any) =>
                filters.courseType.includes(course.type.key.toString())
            );
        }

        // Filter by location
        if (filters.locations.length) {
            // HCMC filter
            if (filters.locations.includes("1")) {
                courseFiltered = courseFiltered.filter((course: any) => course.hcm_t_s && course.hcm_t_e);
            }

            // HANOI filter
            if (filters.locations.includes("2")) {
                courseFiltered = courseFiltered.filter((course: any) => course.hanoi_t_s && course.hanoi_t_e);
            }
        }

        // Filter by date
        courseFiltered = courseFiltered.filter((course) => {
            const matchingHanoiCalendar =
                dayjs(course.hanoi_t_s) >= dayjs(date?.from) && dayjs(course.hanoi_t_e) <= dayjs(date?.to);
            const matchingHCMCalendar =
                dayjs(course.hcm_t_s) >= dayjs(date?.from) && dayjs(course.hcm_t_e) <= dayjs(date?.to);

            return matchingHanoiCalendar || matchingHCMCalendar;
        });

        return courseFiltered;

        // const courseItems = courseFiltered.map((course: any) => {
        //     return {
        //         cardTitle: course?.name,
        //         media: {
        //             name: course?.name,
        //             source: {
        //                 url: getMediaUrl(course.thumbnail),
        //             },
        //             type: "IMAGE",
        //         },
        //         cardDetailedText: getCourseCalendar(course),
        //     };
        // });

        // return courseItems;
    };

    const getCourseCalendar = (course: any) => {
        const arrCalendarText = [];
        const hanoiTimeStart = dayjs(course?.hanoi_t_s);
        const hanoiTimeEnd = dayjs(course?.hanoi_t_e);
        const hcmTimeStart = dayjs(course?.hcm_t_s);
        const hcmTimeEnd = dayjs(course?.hcm_t_e);

        const hanoiTimeBetweenFilter = hanoiTimeStart >= dayjs(date?.from) && hanoiTimeEnd <= dayjs(date?.to);
        const hcmTimeBetweenFilter =
            hcmTimeStart.toDate() >= dayjs(date?.from).toDate() && hcmTimeEnd.toDate() <= dayjs(date?.to).toDate();

        const showHanoiCalendar =
            course?.hanoi_t_s && course?.hanoi_t_e && filters.locations.includes("2") && hanoiTimeBetweenFilter;
        const showHcmCalendar =
            course?.hcm_t_s && course?.hcm_t_e && filters.locations.includes("1") && hcmTimeBetweenFilter;

        if (showHanoiCalendar) {
            arrCalendarText.push(`TP.Hà Nội: ${hanoiTimeStart.get("date")} & ${hanoiTimeEnd.format("DD-MM-YYYY")}`);
        }

        if (showHcmCalendar) {
            arrCalendarText.push(`TP.Hồ Chí Minh: ${hcmTimeStart.get("date")} & ${hcmTimeEnd.format("DD-MM-YYYY")}`);
        }

        return arrCalendarText;
    };

    const handleCourseTypeFilter = (data: any) => {
        if (!coursesType) {
            return;
        }

        const defaultCourseType = coursesType.map((type: any) => type.id.toString());
        setFilters((prev) => ({ ...prev, courseType: data?.length ? data : defaultCourseType }));
    };

    const handleLocationFilter = (data: any) => {
        const defaultLocation = locations.map((location) => location.id.toString());
        setFilters((prev) => ({ ...prev, locations: data?.length ? data : defaultLocation }));
    };

    return (
        <div className="flex items-center lg:flex-row flex-col justify-center lg:py-20 bg-simple-white-3 bg-cover bg-center bg-no-repeat min-h-screen">
            <div
                className="fixed left-0 flex items-center justify-center top-[120px] h-20 w-8 bg-white rounded-e-lg shadow-lg cursor-pointer text-center hover:scale-125 transition-transform duration-300"
                onClick={() => setOpenControl(!openControl)}
            >
                <Image src={"/icons/setting-animate.gif"} alt="setting" width={50} height={50} unoptimized />
            </div>
            <div
                className={cn(
                    "lg:w-1/3 lg:flex sticky left-0 top-[120px] flex-col self-start z-20 transition-all ease-in-out duration-200",
                    {
                        "lg:w-0": !openControl,
                    }
                )}
            >
                <div
                    className={cn(
                        "fixed max-w-1/3 lg:ml-20 lg:mt-0 ml-10 mt-10 bg-white rounded-lg px-4 divide-y-2 shadow-2xl opacity-0 transition-all ease-in-out duration-300 scale-0",
                        {
                            "opacity-100 scale-100": openControl,
                        }
                    )}
                >
                    {/* Filters components */}
                    {loading ? (
                        <LoadingSpinner parentClassName="lg:min-w-[300px] lg:min-h-[450px] min-w-[200px] min-h-[400px]" />
                    ) : (
                        coursesType && (
                            <>
                                <CollapsibleFilterControl
                                    title="Chuyên đề"
                                    content={coursesType as any}
                                    titleIcon="/icons/education.png"
                                    className="w-[350px] space-y-2 m-3 py-5"
                                    onFilter={handleCourseTypeFilter}
                                />

                                <CollapsibleFilterControl
                                    title="Vị trí"
                                    titleIcon="/icons/location.png"
                                    content={locations}
                                    className="w-[350px] space-y-2 m-3 py-5"
                                    onFilter={handleLocationFilter}
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
                        )
                    )}
                </div>
            </div>
            {/* Filters components */}

            {/* Timeline */}
            <div className={cn("lg:w-2/3 w-full p-5 self-end", { "lg:w-3/4": !openControl })}>
                {courseLoading ? (
                    <SkeletonCard />
                ) : (
                    <Chrono
                        key={courseItems?.length}
                        mode="VERTICAL_ALTERNATING"
                        cardWidth={650}
                        mediaHeight={280}
                        contentDetailsHeight={100}
                        fontSizes={{
                            title: "1rem",
                        }}
                        disableToolbar={true}
                        classNames={{
                            card: "w-full !h-auto !min-h-[300px]",
                        }}
                        theme={{
                            titleColorActive: "red",
                        }}
                    >
                        {courseItems?.map((course, index) => {
                            return (
                                <CourseCard
                                    id={index.toString()}
                                    key={course.id + index}
                                    src={getMediaUrl(course.thumbnail)}
                                    title={course.name}
                                    cardDetailedText={getCourseCalendar(course)}
                                    badgeText={
                                        coursesType && coursesType.find((type) => type.id === course.type.key)?.name
                                    }
                                />
                            );
                        })}
                    </Chrono>
                )}
            </div>
            {/* Timeline */}
            <PhoneContact />
        </div>
    );
}
