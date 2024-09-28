import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
    imageUrl: string;
    title: string;
    contents: string[];
    reverse: boolean;
}
export const IntroduceCard: FC<Props> = ({ imageUrl, title, contents, reverse }) => {
    return (
        <div
            className={cn(
                "flex lg:flex-row flex-col items-center gap-5 justify-between bg-[#a0b0c1] lg:px-20 lg:py-16 p-5 shadow-lg rounded-md",
                {
                    "lg:flex-row-reverse": reverse,
                }
            )}
        >
            <div className="flex flex-col lg:basis-1/2 items-center">
                <h3 className="text-2xl font-semibold self-start">{title}</h3>
                <p className="text-base text-[#202020] font-sm mt-8">{contents}</p>
            </div>
            <div
                className={cn("flex lg:basis-1/2 justify-center items-center lg:mt-[-150px]", {
                    "lg:mr-10": reverse,
                    "lg:ml-10": !reverse,
                })}
            >
                <Image
                    src={imageUrl}
                    alt=""
                    width={1000}
                    height={500}
                    className="object-cover max-h-[300px] w-full rounded-md"
                />
            </div>

            {/* <div className="flex items-center justify-center bg-green-100 bg-80%">
                    <div className="w-1/2">
                        <h2 className="text-4xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-700 mb-6">{contents}</p>
                        <button className="bg-transparent hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-gray-400 rounded">
                            Book Consultation
                        </button>
                    </div>

                    <div className="w-1/2">
                        <Image
                            src={imageUrl}
                            alt=""
                            width={400}
                            height={400}
                            className="lg:w-1/2 object-cove rounded-md"
                        ></Image>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
