import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";

export default function BlogDetails({ params }: { params: { slug: string } }) {
    const data = {
        title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
        publishedDate: "09/12/2021",
        author: "Công Trọng",
        thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
        content:
            "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",

        relatedBlog: [
            {
                slug: "slug-here",
                title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
                publishedDate: "09/12/2021",
                author: "Công Trọng",
                thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
                content:
                    "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",
            },
            {
                slug: "slug-here",
                title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
                publishedDate: "09/12/2021",
                author: "Công Trọng",
                thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
                content:
                    "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",
            },
            {
                slug: "slug-here",
                title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
                publishedDate: "09/12/2021",
                author: "Công Trọng",
                thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
                content:
                    "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",
            },
            {
                slug: "slug-here",
                title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
                publishedDate: "09/12/2021",
                author: "Công Trọng",
                thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
                content:
                    "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",
            },
            {
                slug: "slug-here",
                title: "Hoàn Thành Lớp Học “Xây Dựng Văn Hóa Doanh Nghiệp” Tại TP. Hồ Chí Minh– 17 & 18/04/2021",
                publishedDate: "09/12/2021",
                author: "Công Trọng",
                thumbnail: "https://lethamduong.edu.vn/wp-content/uploads/2021/12/van-hoa-doanh-nghiep-2-scaled-1.webp",
                content:
                    "Ngày 17 & 18/04/2021 tại TP. Hồ Chí Minh chuyên đề “Xây Dựng Văn Hóa Doanh Nghiệp”, TS Lê Thẩm Dương đã có buổi diễn thuyết và trao đổi cùng anh chị học viên hết sức thú vị.\n\nMời quý anh chị xem qua hình ảnh và video của lớp học!\n\n<a href='https://bit.ly/3ghYFn3' alt='https://bit.ly/3ghYFn3'>https://bit.ly/3ghYFn3</a>",
            },
        ],
    };

    return (
        <div className="bg-simple-white bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center lg:gap-8 gap-5 mt-[100px] lg:py-20 md:px-10 px-5 lg:max-w-7xl mx-auto">
                <h2 className="text-4xl font-medium text-center">{data.title}</h2>
                <span className="text-2xl">{`Đăng ngày: ${data.publishedDate}`}</span>
                <span>{`TÁC GIẢ: ${data.author}`}</span>
                <Image
                    src={data.thumbnail}
                    alt={data.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain md:max-w-[60%]"
                />
                <pre
                    dangerouslySetInnerHTML={{ __html: data.content }}
                    className="text-wrap text-xl mt-6 lg:px-10 px-3"
                />
                {data.relatedBlog?.length && (
                    <div className="mt-20 flex flex-col lg:gap-8 gap-5">
                        <h4 className="text-5xl font-semibold">Bài viết liên quan</h4>
                        <div className="flex gap-5 flex-wrap items-center justify-center">
                            {data.relatedBlog.map((blog) => {
                                return <BlogCard data={blog} className="w-[30%]"></BlogCard>;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface Props {
    data: {
        slug: string;
        title: string;
        publishedDate: string;
        author: string;
        thumbnail: string;
        content: string;
    };
    className?: ClassNameValue;
}

const BlogCard: FC<Props> = ({ data, className }) => {
    console.log(data);

    return (
        <Link
            href={data.slug}
            className={`flex flex-col bg-white gap-5 p-5 rounded-2xl shadow-lg transition-transform hover:scale-105 ${className}`}
        >
            <Image
                src={data.thumbnail}
                alt={data.title}
                width={800}
                height={600}
                className="w-full h-full object-contain"
            />
            <span className="font-semibold line-clamp-2">{data.title}</span>
            <span className="">{data.publishedDate}</span>
        </Link>
    );
};
