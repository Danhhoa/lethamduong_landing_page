import Link from "next/link";
import { ImageRotate } from "../components/ImageRotate";

export const Contact = () => {
    return (
        <div className="bg-[#dce1e4]">
            <div className="flex lg:flex-row flex-col xl:mx-48 lg:mx-20 mt-20 md:px-10 px-5 py-10">
                <div className="flex flex-col gap-3 lg:w-[50%]">
                    <h2 className="font-semibold md:text-4xl text-2xl">
                        Liên hệ <br />
                        với TS Lê Thẩm Dương
                    </h2>
                    <p className="">
                        Mọi thông tin liên quan đến vấn đề tư vấn, giảng dạy, quảng cáo và hỗ trợ doanh nghiệp xin liên
                        hệ với thông tin sau.
                    </p>
                    <Link
                        href={"#"}
                        className="bg-primary-dark text-white text-lg text-center font-bold content-center rounded-md px-8 py-3 max-w-60 hover:scale-90 transition-all"
                    >
                        Thông tin liên hệ
                    </Link>
                </div>
                <div className="lg:w-[50%] md:ml-10 mt-10">
                    <div className="flex items-center justify-center lg:gap-10 gap-4 max-h-[500px]">
                        <ImageRotate
                            src="/thumbnails/contact-1.webp"
                            alt=""
                            className={`h-full w-[45%] md:mt-0 ounded-lg`}
                        />
                        <ImageRotate
                            src="/thumbnails/contact-2.webp"
                            alt=""
                            className={`h-full w-[45%] rounded-lg mt-10`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
