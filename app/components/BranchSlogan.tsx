import Image from "next/image";

export const BranchSlogan = () => {
    return (
        <div className="flex md:flex-row flex-col md:gap-10 gap-5 items-center justify-center py-5  bg-[linear-gradient(180deg,_#EFE2DC4D_0%,_#FCE2C34D_100%)]">
            <div className="flex">
                <Image src={"/logo/biiline-logo.png"} alt="" width={114} height={114} className="self-start" />
                <div className="p-5">
                    <h3 className="text-[#174EA2] font-bold ">Sản phẩm phát triển bởi Công ty CP Công Nghệ BIILINE</h3>
                    <h4 className="md:text-normal text-sm leading-6">
                        <strong>BIILINE</strong> với kinh nghiệm nhiều năm trong việc phát triển các sản phẩm kĩ thuật
                        số.
                        <br />
                        Hãy liên hệ với chúng tôi để mang sản phẩm của bạn đến với nhiều người dùng.
                    </h4>
                </div>
            </div>

            <div className="flex gap-8 md:gap-3">
                <Image src={"/icons/phone-icon.png"} alt="phone" width={56} height={56} />
                <Image src={"/icons/mail-icon.png"} alt="phone" width={56} height={56} />
                <Image src={"/icons/web-icon.png"} alt="phone" width={56} height={56} />
            </div>
        </div>
    );
};
