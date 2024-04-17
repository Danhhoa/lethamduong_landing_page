import { Button } from "@/components/ui/button";
import { BlogCard } from "../components/BlogCard";

export const Blog = () => {
    const data = [
        {
            img: "/blog/blog-1.png",
            text: "Cách chọn ngày tốt hợp tuổi để chuyển nhà",
        },
        {
            img: "/blog/blog-2.png",
            text: "Trong quá trình chuyển nhà thì đồ đạc bị mất hoặc hư hỏng sẽ như thế nào?",
        },
        {
            img: "/blog/blog-3.png",
            text: "Những lưu ý khi chuyển nhà Bắc Nam - Chuyển nhà từ Hà Nội vào HCM...",
        },
        {
            img: "/blog/blog-4.png",
            text: "Công ty chuyển văn phòng cần thanh lý nội thất bàn ghế làm việc ở đâu?",
        },
    ];
    return (
        <div id="blog" className="p-20 flex flex-col gap-5 scroll-mt-24">
            <div className="text-primary text-center font-bold uppercase tracking-widest">Blog</div>
            <div className="lg:grid-cols-2 grid-cols-1 gap-4 grid">
                {data.map((item, index) => (
                    <BlogCard key={index} img={item.img} text={item.text} />
                ))}
            </div>
            <Button
                size={"lg"}
                variant={"outline"}
                color=""
                className="mx-auto  text-primary bg-primary-foreground border-primary"
            >
                Tải Thêm
            </Button>
        </div>
    );
};
