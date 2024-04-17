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
        <div id="why_choose" className="flex flex-col gap-5 items-center my-20 px-20 scroll-mt-24">
            <p className="uppercase text-primary font-bold tracking-widest">Tại sao chọn Vietnam Moving</p>
            <p className="text-center text-5xl text-blue-800 font-black max-w-[725px] leading-[67px]">
                Các ưu điểm vượt trội về dịch vụ so với các nhà cung cấp khác trên thị trường
            </p>

            <div className="flex flex-wrap justify-between">
                {data.map((item, index) => (
                    <AdCard key={index} imageUrl={item.imageUrl} text={item.text} className="lg:basis-[49%] p-8 mt-3" />
                ))}
            </div>
        </div>
    );
};
