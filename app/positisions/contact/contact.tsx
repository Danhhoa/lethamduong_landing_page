import Image from "next/image";
import React from "react";

export const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row md:py-20 py-10 md:px-10 px-5 mx-auto max-w-[1170px]">
            {/* Contact Information */}
            <div className="lg:basis-1/2 flex flex-col gap-6 mx-auto">
                <h2 className="md:text-5xl text-3xl font-bold mb-5">LIÊN HỆ</h2>

                <div className="flex items-center mb-3">
                    <span className="mr-2">
                        <Image
                            src={"/icons/location-pin.png"}
                            alt="location"
                            width={50}
                            height={50}
                            className="min-w-7"
                        />
                    </span>
                    <div className="flex flex-col gap-3 ml-5 flex-wrap max-w-full">
                        <p className="font-semibold text-lg">Địa Chỉ</p>
                        <p className="text-slate-500 text-wrap">
                            99 đường số 14, Khu phố 3, Phường An Khánh, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-3">
                    <Image src={"/icons/phone1.png"} alt="location" width={40} height={40} className="min-w-7" />
                    <span className="mr-2"></span>
                    <div className="flex flex-col gap-3 ml-5">
                        <p className="font-semibold text-lg">Hotline</p>
                        <a href="tel:+84981405186" className="text-red-500">
                            +84 981 405 186
                        </a>
                        <span className="text-slate-500 text-wrap">
                            <strong>CEO: Nguyễn Công Trọng</strong> (Trợ lý TS Lê Thẩm Dương)
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2">
                        <Image src={"/icons/mail.png"} alt="location" width={40} height={40} className="min-w-7" />
                    </span>
                    <div className="flex flex-col gap-3 ml-5">
                        <p className="font-semibold text-lg">Email</p>
                        <a href="mailto:congtrong@lethamduong.edu.vn" className="text-slate-500 text-wrap">
                            congtrong@lethamduong.edu.vn
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="lg:basis-1/2 p-5 flex justify-center">
                <img
                    src="https://lethamduong.edu.vn/wp-content/uploads/2021/12/TS-LE-THAM-DUONG-1.jpg"
                    alt="CEO Image"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                />
            </div>
        </div>
    );
};
