import Image from "next/image";
import Link from "next/link";
import { ScanToDownload } from "../components/ScanToDownload";

export const Footer = () => {
    return (
        <div className="bg-[#00031C] p-20">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:place-items-start place-items-center gap-10 text-[#D4D4D4]">
                <div className="flex flex-col gap-8">
                    <Image src="/logo/logo-footer.png" alt="logo-img" width={220} height={60} />
                    <span>
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
                    <div className="flex flex-wrap gap-3 items-center self-center place-items-center place-self-center content-center">
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
                <div className="flex flex-col gap-8">
                    <Link href={"#"} className="hover:text-secondary">
                        Dịch vụ
                    </Link>
                    <Link href={"#"} className="hover:text-secondary">
                        Tại sao chọn Vietnam Moving
                    </Link>
                    <Link href={"#"} className="hover:text-secondary">
                        Tính năng
                    </Link>
                    <Link href={"#"} className="hover:text-secondary">
                        s Khách hàng & Cảm nhận
                    </Link>
                    <Link href={"#"} className="hover:text-secondary">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-gray-600">Tổng đài hỗ trợ (miễn phí)</div>
                    <div>Hotline: 1800 7011 (8h - 21h30)</div>

                    <div className="text-gray-600">Kết nối với chúng tôi</div>
                    <div>Hotline: 1800 7011 (8h - 21h30)</div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-gray-600">Tải ứng dụng dành cho khách hàng</div>
                    <ScanToDownload className="bg-[#24263C] self-start" />
                    <div className="text-gray-600">Tải ứng dụng dành cho tài xế</div>
                    <ScanToDownload className="bg-[#24263C] self-start" />
                </div>
            </div>
        </div>
    );
};
