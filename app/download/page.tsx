"use client";
import { useEffect, useState } from "react";
import { Device, detectDevice } from "../utils/device-detecting";
import { redirect } from "next/navigation";

export default function Download() {
    const [device, setDevice] = useState<Device>();
    useEffect(() => {
        setDevice(detectDevice());
    }, []);

    if (device) {
        switch (device) {
            case "android":
                return redirect("https://play.google.com/store/apps/details?id=com.vietnammoving.users");

            default:
                return redirect("https://apps.apple.com/vn/app/vietnam-moving/id6465692846");
        }
    }
}
