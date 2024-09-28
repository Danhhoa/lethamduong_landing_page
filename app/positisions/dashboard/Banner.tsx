import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
    return (
        <div className="w-full h-full bg-landing-1 bg-no-repeat bg-cover bg-top pt-10">
            <div className="flex lg:flex-row flex-col h-full">
                <div className="flex flex-col items-start self-center lg:pl-48  lg:mb-60 lg:gap-10 gap-5 lg:basis-1/2">
                    <p className="text-primary tracking-wide text-3xl font-semibold">
                        Trang thông tin chính thức và duy nhất
                    </p>
                    <p className="text-primary text-5xl font-bold">TS Lê Thẩm Dương</p>
                    <Link href="" className="relative bg-white px-10 py-6 text-lg font-bold text-primary rounded">
                        <span className="flex items-center justify-center">
                            <p>Lịch đào tạo</p>
                            <Image
                                src={"/icons/arrow-right.svg"}
                                alt=""
                                width={20}
                                height={20}
                                // className="  hover:opacity-[100]"
                            />
                        </span>
                        <span className="absolute left-0 bottom-0 w-full transition-all duration-500 h-1.5 bg-primary"></span>
                    </Link>
                </div>

                <div className="flex lg:basis-1/2 items-end">
                    <Image src={"/banner/landing-avatar.webp"} alt="landing-background" width={800} height={800} />
                </div>
            </div>
        </div>
    );
};
