"use client";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
    src: string;
    alt: string;
    className: string;
}
export const ImageRotate: FC<Props> = (params) => {
    const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });
    const handleMoveMouseOverImage = (event: any) => {
        const rect = event?.currentTarget?.getBoundingClientRect();
        const x = event.clientX - rect!.left;
        const y = event.clientY - rect!.top;

        // Calculate the mouse position relative to the image
        const mouseX = (x / rect!.width - 0.5) * 5; // Max rotateY of 15 degrees
        const mouseY = (y / rect!.height - 0.5) * -5; // Max rotateX of 15 degrees
        setMousePosition({ mouseX, mouseY });
    };
    return (
        <Image
            {...params}
            width={1000}
            height={1000}
            onMouseMove={(event) => {
                handleMoveMouseOverImage(event);
            }}
            style={{
                transform: `perspective(1000px) rotateX(${mousePosition.mouseX}deg) rotateY(${mousePosition.mouseY}deg) scale3d(1, 1, 1)`,
            }}
        />
    );
};
