import Image from "next/image";
import { FC } from "react";

export const StarIcon: FC<{ width: number; height: number }> = ({ width, height }) => {
    return <Image src={"/feedback-star.png"} alt="star-icon" width={width} height={height} />;
};
