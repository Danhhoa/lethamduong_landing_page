import { Button } from "@/components/ui/button";
import { ScanToDownload } from "../ScanToDownload";

export const Banner = () => {
    return (
        <div className="flex bg-[url('/banner/main.png')] bg-center bg-no-repeat bg-cover bg-right pl-20 pb-28 min-h-[calc(100vh-80px)]">
            <div className="flex flex-col lg:basis-1/3 md:basis-2/4 gap-3 mt-20">
                <h1 className="xl:text-[52px] lg:text-[46px] text-[#1625AD] font-black leading-[67px] xl:min-w-[600px] lg:min-w-[480px]">
                    Giới Thiệu Ứng Dụng Di Động Mới Của Vietnam Moving
                </h1>
                <p className="leading-8 text-lg max-w-[480px] ">
                    Nhằm nâng cao chất lượng dịch vụ cùng mang đến sự tiện lợi cho trải nghiệm người dùng, Vietnam
                    Moving xin giới thiệu ứng dụng di động hoàn toàn mới. Hãy cùng tải xuống và trải nghiệm bạn nhé!
                </p>
                <Button size={"lg"} className="self-start">
                    Tìm hiểu thêm
                </Button>
                <ScanToDownload text="Quét mã để tải ứng dụng cho IOS & Android" className="self-start mt-10" />
            </div>
        </div>
    );
};
