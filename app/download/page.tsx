"use client";
import { useEffect, useState } from "react";
import { Device, detectDevice } from "../utils/device-detecting";
import { redirect } from "next/navigation";

export default function Download() {
    const [device, setDevice] = useState<Device>("desktop");
    useEffect(() => {
        setDevice(detectDevice());
    }, []);

    switch (device) {
        case "android":
            redirect("https://play.google.com/store/apps/details?id=com.vietnammoving.user");

        default:
            redirect("https://apps.apple.com/vn/app/vietnam-moving/id6465692846");
    }
}
