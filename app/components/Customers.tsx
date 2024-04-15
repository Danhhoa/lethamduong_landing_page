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
        <div className="flex flex-col justify-center items-center gap-16">
            <div className="text-primary font-bold uppercase tracking-widest">KHÁCH HÀNG CỦA VIETNAM MOVING</div>
            <div className="flex gap-10">
                {data.map((img, index) => (
                    <Image key={index} src={img} alt="" width={225} height={110} />
                ))}
            </div>
        </div>
    );
};
