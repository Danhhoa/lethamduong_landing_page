"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { FC } from "react";
import { StarIcon } from "./icons/StarIcon";

interface Props {
    avt: string;
    name: string;
    star: number;
    at: string;
    text: string;
}

export const FeedbackCard: FC<Props> = ({ avt, name, star, at, text }) => {
    return (
        <Card className="px-5 py-2 lg:basis-[49%] min-w-full">
            <CardHeader className="p-0">
                <div className="flex justify-between">
                    <div className="flex gap-2 justify-center">
                        <Avatar>
                            <AvatarImage src={avt} alt="avatar" width={55} className="rounded-full" />
                        </Avatar>
                        <div className="flex flex-col gap-2">
                            <p>{name}</p>
                            <div className="flex">
                                {Array.from(Array(star).keys()).map((item) => (
                                    <StarIcon key={item} width={15} height={15} />
                                ))}
                            </div>
                            <p className="text-xs text-gray-600 font-light">{at}</p>
                        </div>
                    </div>

                    <Image src={"/map-icon.png"} alt="map-icon" width={30} height={30} className="self-start"></Image>
                </div>
            </CardHeader>
            <CardContent className="mt-3">
                <p className="text-sm  text-gray-600 font-light">{text}</p>
            </CardContent>
        </Card>
    );
};
