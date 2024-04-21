import { Button } from "@/components/ui/button";
import { ScanToDownload } from "../components/ScanToDownload";
import Link from "next/link";

export const Banner = () => {
    return (
        <div className="flex lg:bg-[url('/backgrounds/banner-pc.png')] bg-[url('/backgrounds/banner-mobile.png')] bg-cover lg:bg-center bg-bottom-center  bg-no-repeat lg:p-20 md:pl-10 pl-5 lg:mt-20 mt-10 pb-28 min-h-[calc(100vh-80px)] lg:pt-0 md:pt-[700px] pt-[400px]">
            <div className="flex flex-col lg:basis-1/3 gap-3 mt-20">
                <h1 className="xl:text-[52px] lg:text-[46px] text-4xl text-[#1625AD] font-black leading-[67px] xl:min-w-[600px] lg:min-w-[480px] lg:mt-0 mt-10">
                    Giới Thiệu Ứng Dụng Di Động Mới Của Vietnam Moving
                </h1>
                <p className="leading-8 text-lg max-w-[480px] ">
                    Nhằm nâng cao chất lượng dịch vụ cùng mang đến sự tiện lợi cho trải nghiệm người dùng, Vietnam
                    Moving xin giới thiệu ứng dụng di động hoàn toàn mới. Hãy cùng tải xuống và trải nghiệm bạn nhé!
                </p>
                <Link href={"#services"}>
                    <Button size={"lg"} className="self-start">
                        Tìm hiểu thêm
                    </Button>
                </Link>
                <ScanToDownload width={120} height={120} className="self-start mt-10 lg:max-w-[60%] max-w-[90%]" />
            </div>
        </div>
    );
};
