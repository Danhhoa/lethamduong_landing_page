import { ScanToDownload } from "../components/ScanToDownload";
import { CardService } from "./CardService";

export const BecomeDriver = () => {
    const data = [
        {
            imageUrl: "/service/service1.png",
            title: "Kiếm thêm nguồn thu nhập",
            subTitle: "Nhận đơn từ Vietnam Moving hoặc từ các khách xung quanh vị trí của bạn.",
        },
        {
            imageUrl: "/service/service2.png",
            title: "Theo dõi đơn hàng nhanh chóng",
            subTitle: "Dễ dàng xem trạng thái đơn hàng hiện tại và lịch sử đơn hàng trước đó.",
        },
        {
            imageUrl: "/service/service3.png",
            title: "Báo cáo thống kê đơn hàng",
            subTitle: "Theo dõi đơn hàng và thu nhập theo thời gian để có thể nắm rõ nhiều hơn về thời gian hoạt động.",
        },
    ];
    return (
        <div className="relative p-20 my-20 font-bold bg-[url('/backgrounds/background-4.png')]">
            <div className="before:absolute before:top-10 before:left-0 before:w-full before:h-[550px] before:bg-[linear-gradient(to_right,rgba(72,85,99,0.65)_0%,rgba(41,50,60,1)_100%)]"></div>
            <div className="relative flex gap-10 z-3">
                <div className="flex flex-col basis-1/2 gap-3 pr-20">
                    <p className="text-5xl text-secondary font-black leading-[67px]">
                        Trở thành đối tác tài xế của Vietnam Moving với nhiều lợi ích ưu đãi
                    </p>
                    <ScanToDownload
                        text="Quét mã để tải ứng dụng cho iOS & Android"
                        className="w-[70%] text-white bg-[#34383D] mt-10"
                    ></ScanToDownload>
                </div>
                <div className="flex flex-col basis-1/2 gap-10">
                    {data.map((item) => (
                        <CardService
                            key={item.imageUrl}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            subTitle={item.subTitle}
                            theme="dark"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
