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
        <div className="relative lg:p-20 lg:my-20 px-10 my-10 font-bold bg-[url('/backgrounds/background-4.png')]">
            <div className="before:absolute before:top-10 before:left-0 before:w-full before:lg:h-[550px] before:h-[950px] before:bg-[linear-gradient(to_right,rgba(72,85,99,0.75)_0%,rgba(41,50,60,1)_100%)]"></div>
            <div className="relative flex lg:flex-row flex-col gap-10 z-3 pt-14">
                <div className="flex flex-col lg:basis-[50%] gap-3">
                    <p className="lg:text-5xl text-4xl lg:!leading-[67px] leading-[50px] lg:max-w-[540px] text-secondary font-black">
                        Trở thành đối tác tài xế của Vietnam Moving với nhiều lợi ích ưu đãi
                    </p>
                    <ScanToDownload className="lg:max-w-[70%] text-white bg-[#34383D] mt-10" />
                </div>
                <div className="flex flex-col lg:basis-[45%] gap-10">
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
