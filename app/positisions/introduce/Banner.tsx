import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
    return (
        <div className="w-full h-full bg-[url('/banner/introduce-banner-1.jpeg')] bg-no-repeat bg-cover bg-left-top pt-10 lg:min-h-[960px] min-h-[480px]">
            <div className="flex lg:flex-row flex-col w-full h-full">
                <div className="hidden md:flex flex-col items-end justify-center flex-1 md:mr-40 md:pt-40 text-white lg:gap-10 gap-5">
                    <p className="lg:text-5xl text-3xl font-bold font-sans">TS Lê Thẩm Dương</p>
                    <p className="lg:text-3xl text-xl font-sans">Diễn giả, người truyền cảm hứng đến mọi người</p>
                    <Link
                        href="/lich-dao-tao/2024-2025"
                        className="relative bg-white lg:px-10 lg:py-6 px-5 py-3 text-lg font-bold text-primary rounded"
                    >
                        <span className="flex items-center justify-center">
                            <p>Lịch đào tạo</p>
                            <Image src={"/icons/arrow-right.svg"} alt="" width={20} height={20} />
                        </span>
                        <span className="absolute left-0 bottom-0 w-full transition-all duration-500 h-1.5 bg-primary"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
