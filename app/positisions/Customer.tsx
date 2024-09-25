import Image from "next/image";

export const Customer = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-wrap gap-5 mt-20">
            <h2 className="text-4xl font-bold">Đối tác của chúng tôi</h2>
            <div className="flex lg:flex-row flex-col">
                <div>
                    <Image src={"/customers/1.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/2.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/3.webp"} alt="" width={600} height={200} className="basis-1/2" />
                </div>
                <div>
                    <Image src={"/customers/4.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/5.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/6.webp"} alt="" width={600} height={200} className="basis-1/2" />
                </div>
            </div>
        </div>
    );
};
