import { IntroduceCard } from "@/app/components/IntroduceCard";
import { DirAnimation, FadeInView } from "@/app/components/fade-in-view/FadeInView";

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
        <div className="max-w-[1170px] mx-auto  flex flex-col lg:gap-32 gap-10 lg:p-20 p-10">
            {data.map((item, index) => {
                const dir = ["l2r", "r2l", "b2t"];

                return (
                    <FadeInView key={index} dir={dir[index] as DirAnimation}>
                        <IntroduceCard
                            imageUrl={item.imageUrl}
                            title={item.title}
                            contents={item.contents}
                            reverse={item.reverse}
                        />
                    </FadeInView>
                );
            })}
        </div>
    );
};
