"use client";
import { useState } from "react";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);

    return (
        <nav className="fixed w-full top-0 flex justify-between items-center h-[80px] lg:px-12 md:px-10 px-5  bg-secondary z-10 "></nav>
    );
};
