import { FadeInView } from "@/app/components/fade-in-view/FadeInView";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
    return (
        <div className="w-full h-full bg-landing-1 bg-no-repeat bg-cover bg-top pt-10">
            <div className="flex lg:flex-row flex-col h-full">
                <FadeInView className="flex flex-col lg:basis-1/2 lg:pl-20 px-10 lg:mt-20 mt-5">
                    <div className="relative lg:left-36 md:left-14 flex flex-col lg:items-start lg:self-start items-center lg:gap-10 gap-5">
                        <p className="text-primary tracking-wide text-3x font-semibold text-center">
                            Trang thông tin chính thức và duy nhất
                        </p>
                        <p className="text-primary md:text-5xl text-2xl font-bold text-center">TS Lê Thẩm Dương</p>
                        <Link
                            href="/lich-dao-tao/2024-2025"
                            className="relative group bg-white px-10 py-6 text-lg font-bold text-primary rounded transition ease-in-out duration-300"
                        >
                            <span className="flex items-center justify-center">
                                <p>Lịch đào tạo</p>
                                <Image
                                    src={"/icons/arrow-right.svg"}
                                    alt=""
                                    width={25}
                                    height={25}
                                    className="absolute ml-2 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 ease-in-out duration-300"
                                />
                            </span>
                            <span className="absolute left-0 bottom-0 w-full group-hover:w-0 duration-500 h-1.5 bg-primary" />
                        </Link>
                    </div>
                </FadeInView>
                <div className="flex lg:basis-1/2 items-end">
                    <Image src={"/banner/landing-avatar.webp"} alt="landing-background" width={800} height={800} />
                </div>
            </div>
        </div>
    );
};
