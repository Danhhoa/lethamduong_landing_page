import Image from "next/image";
import { FC } from "react";

export const ContactMe = () => {
    const data = [
        {
            imageUrl: "/icons/mail.svg",
            title: "Email",
            subTitle: "congtrong@lethamduong.edu.vn",
        },
        {
            imageUrl: "/icons/phone.svg",
            title: "Số điện thoại",
            subTitle: "+84 981 405 186",
        },
        {
            imageUrl: "/icons/world.svg",
            title: "Địa chỉ",
            subTitle: "99 Đ14, KP3 Phường An Khánh, Thủ Đức",
        },
    ];

    return (
        <div className="flex flex-col flex-wrap items-center gap-5 justify-center bg-light-80 lg:py-20 py-10">
            <div className="text-3xl font-bold">Liên hệ với chúng tôi</div>
            <div className="">Giảng dạy, tư vấn và hỗ trợ quảng cáo</div>
            <div className="flex lg:flex-row flex-col mt-5 lg:divide-x-2 lg:divide-y-0 divide-x-0 divide-y-2">
                {data.map((data, index) => {
                    return (
                        <ContactMeItem key={index} imgUrl={data.imageUrl} title={data.title} subTitle={data.subTitle} />
                    );
                })}
            </div>
        </div>
    );
};

const ContactMeItem: FC<{ imgUrl: string; title: string; subTitle: string }> = ({ imgUrl, title, subTitle }) => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 items-center justify-center lg:px-20 lg:py-10 p-5 max-w-[380px]">
            <Image src={imgUrl} alt="mail" width={40} height={40} />
            <div className="font-bold">{title}</div>
            <p className="text-center">{subTitle}</p>
        </div>
    );
};
