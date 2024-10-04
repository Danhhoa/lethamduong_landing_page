"use client";

import { FilterCourse } from "@/app/components/FIlterCourse";
import { FadeInView } from "@/app/components/fade-in-view/FadeInView";
import { Chrono } from "@/app/components/timeline/ChronoClient";

export default function SheduleCoursePage({ params }: { params: { slug: string } }) {
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
        <div className="flex items-center lg:flex-row flex-col justify-center bg-light-90 mt-[100px] py-20">
            <div className="lg:max-w-1/3 lg:flex sm:hidden sticky left-0 top-[120px] flex-col self-start bg-white rounded-lg px-4 divide-y-2">
                <FilterCourse />
            </div>
            <div className="lg:w-2/3 w-full p-5 self-end">
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
