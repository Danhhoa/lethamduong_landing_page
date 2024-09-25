import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const IntroduceService = () => {
    const services = [
        {
            title: "Đào Tạo Kinh Doanh",
            imgUrl: "/backgrounds/hinh-thay-1.jpg",
        },
        {
            title: "Tư Vấn Doanh Nghiệp",
            imgUrl: "/backgrounds/hinh-thay-2.jpg",
        },
        {
            title: "Quảng Cáo",
            imgUrl: "/backgrounds/hinh-thay-3.jpg",
        },
    ];
    return (
        <div className="flex flex-col">
            <div className="lg:block flex flex-col-reverse items-center justify-center bg-gray-300">
                <iframe
                    src="https://www.youtube.com/embed/D0ccqQe3c_s?autoplay=0&mute=1&loop=0&color=white&controls=1&modestbranding=0&playsinline=1&rel=0"
                    allow="accelerometer; modestbranding; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="lg:w-1/2 w-full float-right ml-10 mb-6"
                    height={500}

                    // className="w-[300%] h-full ml-[-100%]"
                    // style={{ width: "300%", marginLeft: "-100%" }}
                />
                <div className="py-10 px-20">
                    <div className="text-primary text-4xl font-bold mb-10 mt-20">Trường Doanh Nhân PR</div>
                    <div className="text-xl leading-10">
                        <p className="mb-6">
                            Trường Doanh Nhân PR là một trong những đơn vị đào tạo doanh nhân đi đầu về chất lượng giảng
                            dạy tại Việt Nam. Dưới pháp nhân là Công ty cổ phần phát triển giáo dục PR, được thành lập
                            vào năm 2017.
                        </p>
                        <p className="mb-6">
                            Trường Doanh Nhân PR luôn luôn đổi mới, sáng tạo và liên tục hoàn thiện mình để cung cấp
                            những sản phẩm giảng dạy chất lượng cao cho người học trong nước và quốc tế.
                        </p>
                        <p className="mb-6">
                            Tự hào là đơn vị độc quyền tổ chức các khóa học chuyên sâu của TS Lê Thẩm Dương, Trường
                            Doanh Nhân PR chuyên cung cấp các chương trình đào tạo do TS Lê Thẩm Dương trực tiếp giảng
                            dạy và là diễn giả duy nhất về các chương trình Nghề kinh doanh, Chứng khoán, Bất động sản,
                            Tài chính, Nhân sự,…cho cá nhân và tổ chức.
                        </p>
                        <p className="mb-6">
                            Đồng thời, Trường cũng là đơn vị độc quyền cung cấp dịch vụ đào tạo doanh nghiệp inhouse của
                            ngài. Bên cạnh đó, nhận được sự ủy quyền, Trường Doanh Nhân PR là đơn vị đại diện, kết nối
                            duy nhất giữa TS Lê Thẩm Dương với doanh nghiệp, đối tác và khách hàng, chịu trách nhiệm
                            phát ngôn trước công chúng về các vấn đề truyền thông, truyền hình, giải trí, xuất bản sách,
                            chương trình tập huấn cán bộ, đào tạo doanh nghiệp,… của TS Lê Thẩm Dương.
                        </p>
                        <Button size={"lg"} className="rounded-full px-8 py-6 bg-primary-light font-bold">
                            Xem thêm
                        </Button>
                    </div>
                </div>
            </div>
            {services.map((service, index) => {
                const isReverse = index % 2;

                return (
                    <div
                        key={index}
                        className={cn("flex lg:flex-row flex-col bg-[#252e46] text-white", {
                            "lg:flex-row-reverse": isReverse,
                            "bg-white": isReverse,
                            "text-dark": isReverse,
                        })}
                    >
                        {/* <div
                            className={cn(`bg-cover bg-no-repeat bg-center basis-1/2 w-full h-[400px]`)}
                            style={{ backgroundImage: `url(${service.imgUrl})` }}
                        /> */}
                        <div className="flex lg:basis-1/2">
                            <Image
                                src={service.imgUrl}
                                alt={service.title}
                                width={800}
                                height={800}
                                objectFit="cover"
                                className={cn("w-full h-full", {
                                    "rounded-ss-full": isReverse,
                                    "rounded-ee-full": !isReverse,
                                })}
                            />
                        </div>

                        <div className="flex items-center justify-center lg:basis-1/2 min-h-[250px] rounded-ee-full">
                            <p className="flex items-center justify-center lg:text-5xl md:text-2xl font-bold">
                                {service.title}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
