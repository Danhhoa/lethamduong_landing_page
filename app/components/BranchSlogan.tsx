import Image from "next/image";

export const BranchSlogan = () => {
    return (
        <div className="flex gap-10 items-center justify-center bg-[linear-gradient(180deg,_#EFE2DC4D_0%,_#FCE2C34D_100%)]">
            <Image src={"/logo/biiline-logo.png"} alt="" width={114} height={114} />
            <div className="">
                <h3 className="text-[#174EA2] font-bold">Sản phẩm phát triển bởi Công ty CP Công Nghệ BIILINE</h3>
                <h4>
                    <strong>BIILINE</strong> với kinh nghiệm nhiều năm trong việc phát triển các sản phẩm kĩ thuật số.
                    <br />
                    Hãy liên hệ với chúng tôi để mang sản phẩm của bạn đến với nhiều người dùng.
                </h4>
            </div>

            <div className="flex gap-3">
                <Image src={"/icons/phone-icon.png"} alt="phone" width={56} height={56} />
                <Image src={"/icons/mail-icon.png"} alt="phone" width={56} height={56} />
                <Image src={"/icons/web-icon.png"} alt="phone" width={56} height={56} />
            </div>
        </div>
    );
};
