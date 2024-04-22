import Image from "next/image";
import { CardService } from "./CardService";
import { PhoneContact } from "../components/PhoneContact";

export const Services = () => {
    const data = [
        {
            imageUrl: "/service/service1.png",
            title: "Dịch vụ gửi hàng siêu tốc",
            subTitle: "Mạng lưới chi nhánh rộng khắp các tỉnh, vận chuyển nhanh chóng, an toàn, nhận hàng trong 24h.",
        },
        {
            imageUrl: "/service/service2.png",
            title: "Dịch vụ chuyển nhà trọn gói",
            subTitle:
                "Dịch vụ trọn gói đồ đạc được bao bọc cẩn thận, tháo lắp nội thất, vận chuyển, sắp xếp lại đồ đạc ở nhà mới.",
        },
        {
            imageUrl: "/service/service3.png",
            title: "Dịch vụ chuyển văn phòng",
            subTitle:
                "Dịch vụ trọn gói đồ đạc được bao bọc cẩn thận, tháo lắp nội thất, vận chuyển, sắp xếp lại đồ đạc ở nhà mới.",
        },
    ];
    return (
        <div
            id="dich-vu"
            className="lg:m-20 md:m-10 m-5 font-bold bg-app-2 bg-no-repeat bg-contain bg-center scroll-mt-24"
        >
            <div className="relative flex justify-end h-[100px]">
                <PhoneContact />
            </div>
            <p className="uppercase text-primary text-xl tracking-widest">Dịch vụ nổi bật</p>
            <div className="flex flex-wrap lg:flex-row flex-col justify-between mt-5">
                <div className="flex flex-col lg:basis-[50%] gap-3">
                    <p className="lg:text-5xl text-4xl lg:!leading-[67px] leading-[50px] lg:max-w-[540px] text-blue-800 font-black">
                        Cung cấp dịch vụ vận chuyển tốt nhất với chi phí thấp trong và ngoài nước
                    </p>
                    <p className="max-w-[520px] lg:text-lg font-normal text-gray-600">
                        Không chỉ hỗ trợ cung cấp cho khách hàng nội địa và ngoại quốc các dịch vụ dịch chuyển trong
                        nước, công ty còn mở rộng dịch vụ ra nước ngoài. Với những dịch vụ vận chuyển quốc tế, Vietnam
                        Moving thực sự khẳng định được quy mô và đẳng cấp của mình.
                    </p>
                </div>
                <div className="flex flex-col lg:basis-[45%] gap-10 lg:mt-0 mt-5">
                    {data.map((item) => (
                        <CardService
                            key={item.imageUrl}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            subTitle={item.subTitle}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
