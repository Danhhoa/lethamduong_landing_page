import Link from "next/link";
import { ImageRotate } from "../components/ImageRotate";

export const Contact = () => {
    return (
        <div className=" bg-[#dce1e4]">
            <div className="flex lg:flex-row flex-col lg:mx-48 md:mx-28 mt-40 pt-20">
                <div className="flex flex-col gap-3 basis-1/2 px-20">
                    <h2 className="text-4xl font-medium max-w-[432px]">
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
                <div className="basis-1/2">
                    <div className="flex gap-10 max-h-[500px]">
                        <ImageRotate src="/thumbnails/contact-1.webp" alt="" className={`h-full w-[35%] rounded-lg`} />
                        <ImageRotate
                            src="/thumbnails/contact-2.webp"
                            alt=""
                            className={`h-full w-[35%] rounded-lg mt-10`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
