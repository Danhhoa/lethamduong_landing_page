import { IntroduceCard } from "@/app/components/IntroduceCard";

export const Content = () => {
    const data = [
        {
            imageUrl: "https://lethamduong.edu.vn/wp-content/uploads/2024/08/Bo-Giao-Duc.jpg",
            title: "Kinh nghiệm giảng dạy",
            contents: [
                "Đã từng hợp tác giảng dạy với các đơn vị như Văn phòng chính phủ, Ban dân vận Trung ương Đảng, Quốc Hội và là một trong số ít người tham gia giảng dạy tại các nước như Vương Quốc Anh, Hoa Kỳ, Đức,…",
            ],
            reverse: false,
        },
        {
            imageUrl: "https://lethamduong.edu.vn/wp-content/uploads/2024/08/Chi-so-ton-tai.jpg",
            title: "Hoạt động tư vấn",
            contents: [
                "Ông cũng được biết đến với vai trò “Bác sĩ doanh nghiệp” chuyên tư vấn cho các tập đoàn lớn như: LG, Toyota Việt Nam, Honda Việt Nam, Petrolimex, VNPT,…",
            ],
            reverse: true,
        },
        {
            imageUrl: "https://lethamduong.edu.vn/wp-content/uploads/2024/08/Ra-mat-sach.jpg",
            title: "Tác giả",
            contents: [
                "Bên cạnh đó ông cũng là tác giả của những cuốn sách luôn đứng đầu bảng xếp hạng của Fahasa như: “Tiến Sĩ Lê Thẩm Dương người truyền cảm hứng”, “Hồi ký Tiến Sĩ Lê Thẩm Dương”, “Cảm xúc là kẻ thù số một của thành công”….",
            ],
            reverse: false,
        },
    ];
    return (
        <div className="min-h-[1000px]">
            <div className="max-w-[1170px] mx-auto  flex flex-col lg:gap-32 gap-10 lg:p-20 p-10">
                {data.map((item, index) => {
                    return (
                        <IntroduceCard
                            key={index}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            contents={item.contents}
                            reverse={item.reverse}
                        />
                    );
                })}
            </div>
        </div>
    );
};

import React from "react";

export const AboutMe = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-4xl bg-gray-200 p-8 rounded-lg shadow-lg flex items-center">
                {/* Text Section */}
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 mb-6">
                        We believe that people are our main asset. Our team consists of the great professionals with
                        years of relevant experience. We have an awesome portfolio of successful cases that we are ready
                        to share. Choosing our company will be your best decision.
                    </p>
                    <button className="bg-transparent hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
                        Book Consultation
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-1/2">
                    <img
                        src="https://via.placeholder.com/500x500" // Replace this with your image source
                        alt="Profile"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};
