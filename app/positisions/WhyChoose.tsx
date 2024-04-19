import { AdCard } from "../components/AdCard";

export const WhyChoose = () => {
    const data = [
        {
            imageUrl: "/ad1.png",
            text: "Thiết bị, đồ đạc đóng gói cẩn thận",
        },
        {
            imageUrl: "/ad2.png",
            text: "Giá tốt, tiết kiệm cho khách hàng",
        },
        {
            imageUrl: "/ad3.png",
            text: "Bồi thường khi đồ đạc bị hư hỏng",
        },
        {
            imageUrl: "/ad4.png",
            text: "Nhân viên chuyên nghiệp và nhiệt tình",
        },
    ];
    return (
        <div id="why_choose" className="flex flex-col gap-5 items-center lg:m-20 md:m-10 m-5 mt-10 scroll-mt-24">
            <p className="uppercase text-xl text-primary text-center font-bold tracking-widest">
                Tại sao chọn Vietnam Moving
            </p>
            <p className="text-center lg:text-5xl text-[40px] text-blue-800 font-black max-w-[725px] lg:leading-[67px] leading-[50px]">
                Các ưu điểm vượt trội về dịch vụ so với các nhà cung cấp khác trên thị trường
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <AdCard key={index} imageUrl={item.imageUrl} text={item.text} className="p-8" />
                ))}
            </div>
        </div>
    );
};
