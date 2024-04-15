import { AdCard } from "./AdCard";

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
        <div className="flex flex-col gap-5 items-center my-20 px-20">
            <p className="uppercase text-primary font-bold tracking-widest">Tại sao chọn Vietnam Moving</p>
            <p className="text-center text-5xl text-blue-800 font-black max-w-[725px] leading-[67px]">
                Các ưu điểm vượt trội về dịch vụ so với các nhà cung cấp khác trên thị trường
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
                {data.map((item, index) => (
                    <AdCard key={index} imageUrl={item.imageUrl} text={item.text} className="basis-[45%] p-10" />
                ))}
            </div>
        </div>
    );
};
