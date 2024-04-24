import Image from "next/image";
import Link from "next/link";

export const Certificate = () => {
    return (
        <>
            <Image src={"/certificate/cer-1.png"} alt="" width={100} height={39} className="basis-[30%] self-start" />
            <Link
                href={"https://tinnhiemmang.vn/danh-ba-tin-nhiem/vietnammovingcom-1643342521"}
                target="_blank"
                className="transition-all hover:scale-110"
            >
                <Image
                    src={"/certificate/cer-2.png"}
                    alt=""
                    width={87}
                    height={39}
                    className="basis-[30%] self-start"
                />
            </Link>
            <Link
                href={"http://online.gov.vn/Home/WebDetails/55092"}
                target="_blank"
                className="transition-all hover:scale-110"
            >
                <Image
                    src={"/certificate/cer-3.png"}
                    alt=""
                    width={90}
                    height={20}
                    className="basis-[30%] self-start"
                />
            </Link>
            <Image src={"/certificate/cer-4.png"} alt="" width={84} height={110} className="self-start" />
            <Image src={"/certificate/cer-5.png"} alt="" width={24} height={110} className="self-start" />
        </>
    );
};
