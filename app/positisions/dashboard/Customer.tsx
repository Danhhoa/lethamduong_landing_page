import { FadeInView } from "@/app/components/fade-in-view/FadeInView";
import Image from "next/image";

export const Customer = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-wrap gap-5 mt-20">
            <h2 className="lg:text-4xl text-2xl font-bold px-5">Đối tác của chúng tôi</h2>
            <div className="flex lg:flex-row flex-col">
                <FadeInView>
                    <Image src={"/customers/1.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/2.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/3.webp"} alt="" width={600} height={200} className="basis-1/2" />
                </FadeInView>
                <FadeInView dir="b2t">
                    <Image src={"/customers/4.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/5.webp"} alt="" width={600} height={200} className="basis-1/2" />
                    <Image src={"/customers/6.webp"} alt="" width={600} height={200} className="basis-1/2" />
                </FadeInView>
            </div>
        </div>
    );
};
