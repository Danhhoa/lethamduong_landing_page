import Image from "next/image";
import Link from "next/link";
import { ScanToDownload } from "../components/ScanToDownload";

export const Footer = () => {
    return (
        <div className="bg-[#00031C] lg:px-20 lg:pt-20 md:px-10 lg:pt-10 px-5 pt-5">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:place-items-start place-items-center gap-10 text-[#D4D4D4]">
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-5">
                    <Image src="/logo/logo-footer.png" alt="logo-img" width={220} height={60} />
                    <span className="lg:px-0 px-20 lg:text-start text-center">
                        Địa chỉ:&nbsp;
                        <Link
                            href={`http://maps.google.com/?q="36 Đường số 1, KDC Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh"`}
                            className="underline"
                            target="_blank"
                        >
                            36 Đường số 1, KDC Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh
                        </Link>
                    </span>
                    <span>
                        Email:&nbsp;
                        <a href="mailto:info@vietnammoving.com" className="underline">
                            info@vietnammoving.com
                        </a>
                    </span>
                    <div className="lg:flex flex-wrap gap-3 items-center self-center place-items-center place-self-center content-center hidden">
                        <Image
                            src={"/certificate/cer-1.png"}
                            alt=""
                            width={100}
                            height={39}
                            className="basis-[30%] self-start"
                        />
                        <Image
                            src={"/certificate/cer-2.png"}
                            alt=""
                            width={87}
                            height={39}
                            className="basis-[30%] self-start"
                        />
                        <Image
                            src={"/certificate/cer-3.png"}
                            alt=""
                            width={90}
                            height={20}
                            className="basis-[30%] self-start"
                        />
                        <Image src={"/certificate/cer-4.png"} alt="" width={84} height={110} className=" self-start" />
                        <Image src={"/certificate/cer-5.png"} alt="" width={24} height={110} className=" self-start" />
                    </div>
                </div>
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-5">
                    <Link href={"#services"} className="hover:text-secondary">
                        Dịch vụ
                    </Link>
                    <Link href={"#why_choose"} className="hover:text-secondary">
                        Tại sao chọn Vietnam Moving
                    </Link>
                    <Link href={"#features"} className="hover:text-secondary">
                        Tính năng
                    </Link>
                    <Link href={"#feedback"} className="hover:text-secondary">
                        Khách hàng & Cảm nhận
                    </Link>
                    <Link href={"#blog"} className="hover:text-secondary">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-5">
                    <div className="text-gray-600">Tổng đài hỗ trợ (miễn phí)</div>
                    <div>Hotline: 1800 7011 (8h - 21h30)</div>

                    <div className="text-gray-600">Kết nối với chúng tôi</div>
                    <div>Hotline: 1800 7011 (8h - 21h30)</div>
                </div>
                <div className="flex flex-col lg:items-start items-center lg:gap-8 gap-5">
                    <div className="text-gray-600">Tải ứng dụng dành cho khách hàng</div>
                    <ScanToDownload className="bg-[#24263C] self-start" />
                    <div className="text-gray-600">Tải ứng dụng dành cho tài xế</div>
                    <ScanToDownload className="bg-[#24263C] self-start" />
                </div>
                <div className="lg:hidden flex flex-wrap lg:gap-5 gap-3 justify-center items-center self-center place-items-center place-self-center content-center">
                    <Image
                        src={"/certificate/cer-1.png"}
                        alt=""
                        width={100}
                        height={39}
                        className="basis-[30%] self-start"
                    />
                    <Image
                        src={"/certificate/cer-2.png"}
                        alt=""
                        width={87}
                        height={39}
                        className="basis-[30%] self-start"
                    />
                    <Image
                        src={"/certificate/cer-3.png"}
                        alt=""
                        width={90}
                        height={20}
                        className="basis-[30%] self-start"
                    />
                    <Image src={"/certificate/cer-4.png"} alt="" width={84} height={110} className=" self-start" />
                    <Image src={"/certificate/cer-5.png"} alt="" width={24} height={110} className=" self-start" />
                </div>
            </div>
            <p className="text-xs font-light text-gray-400 py-5 mt-10 text-center">
                2024 © Công ty TNHH Vietnam Moving®. GPDKKD: 0311327008 do sở KH & ĐT TP.HCM cấp ngày 10/11/2011
            </p>
        </div>
    );
};
