import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="bg-white flex-col gap-10 lg:px-10 px-5 border-t-2">
            <div className="flex lg:flex-row flex-col justify-around lg:gap-10 gap-5  py-10">
                <div className="flex flex-col ms-3">
                    <Image
                        src={"/logo/main-logo.png"}
                        alt="logo"
                        width={450}
                        height={80}
                        // fill
                        // objectFit="contain"
                        className="object-contain h-full left-0"
                    />
                    <p className="mt-3">
                        <strong>Địa chỉ: </strong> 99 đường số 14, Khu phố 3, Phường An Khánh, Thành Phố Thủ Đức, Thành
                        Phố Hồ Chí Minh
                    </p>
                    <p className="mt-3">
                        <strong>Email: </strong>congtrong@lethamduong.edu.vn
                    </p>
                    <a href="tel:+84 981 405 186" className="mt-3">
                        <strong>Hotline: </strong>+84 981 405 186
                    </a>
                </div>

                <div className="flex flex-col gap-5 font-bold text-slate-500 uppercase mt-8 ms-3">
                    <Link href={"/gioi-thieu"}>Giới thiệu</Link>
                    <Link href={"/lich-dao-tao"}>Lịch Đào tạo</Link>
                    <Link href={"/lien-he"}>Liên hệ</Link>
                </div>
            </div>
            <div className="mx-auto w-[80%] h-0.5 bg-slate-400 mt-20" />
            <div className="flex items-center justify-center gap-4 mt-5">
                <Link href={"https://www.facebook.com/lethamduong.edu.vn"}>
                    <Image src="/icons/facebook.png" alt="facebook" width={30} height={30} />
                </Link>
                <Link href={"https://www.youtube.com/c/lethamduongeduvn"}>
                    <Image src="/icons/video.png" alt="youtube" width={30} height={30} />
                </Link>
            </div>
            <p className="text-xs font-light text-gray-400 py-5 text-center">
                Copyright © 2024 CÔNG TY CỔ PHẦN ĐÀO TẠO PR
            </p>
        </div>
    );
};
