import Image from "next/image";

export const Certificate = () => {
    return (
        <>
            <Image src={"/certificate/cer-1.png"} alt="" width={100} height={39} className="basis-[30%] self-start" />
            <Image src={"/certificate/cer-2.png"} alt="" width={87} height={39} className="basis-[30%] self-start" />
            <Image src={"/certificate/cer-3.png"} alt="" width={90} height={20} className="basis-[30%] self-start" />
            <Image src={"/certificate/cer-4.png"} alt="" width={84} height={110} className="self-start" />
            <Image src={"/certificate/cer-5.png"} alt="" width={24} height={110} className="self-start" />
        </>
    );
};
