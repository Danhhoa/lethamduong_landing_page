import React from "react";

export const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white p-10 items-center justify-center min-h-screen">
            {/* Contact Information */}
            <div className="lg:basis-1/2 flex flex-col flex-wrap gap-6 px-40">
                <h2 className="text-5xl font-bold mb-5">LIÊN HỆ</h2>

                <div className="flex items-center gap-5 mb-3">
                    <span className="mr-2">📍</span>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Địa Chỉ</p>
                        <p className="text-slate-500">
                            99 đường số 14, Khu phố 3, Phường An Khánh, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5 mb-3">
                    <span className="mr-2">📞</span>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Hotline</p>
                        <a href="tel:+84981405186" className="text-blue-500">
                            +84 981 405 186
                        </a>
                        <span className="text-slate-500">
                            <strong>CEO: Nguyễn Công Trọng</strong> (Trợ lý TS Lê Thẩm Dương)
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="mr-2">✉️</span>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">Email</p>
                        <a href="mailto:congtrong@lethamduong.edu.vn" className="text-slate-500">
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
