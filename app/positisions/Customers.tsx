import Image from "next/image";

export const Customers = () => {
    const data = [
        "/customers/agribank.png",
        "/customers/bao-viet.png",
        "/customers/bidv.png",
        "/customers/bitexco-group.png",
        "/customers/dien-quan.png",
    ];
    return (
        <div className="flex flex-col justify-center items-center mt-20 ">
            <div className="text-primary font-bold uppercase tracking-widest">KHÁCH HÀNG CỦA VIETNAM MOVING</div>
            <div className="flex flex-wrap items-center justify-center lg:gap-8 gap-3">
                {data.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt=""
                        width={225}
                        height={110}
                        objectFit="cover"
                        className="md:w-[225px] w-[125px] h-full top-0 left-0 object-cover"
                    />
                ))}
            </div>
        </div>
    );
};
