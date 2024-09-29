import { FC } from "react";

export const YoutubeVideoIframe: FC<{ url: string; className?: string }> = ({ url, className }) => {
    return (
        <iframe
            src={url + "?autoplay=0&mute=1&loop=0&color=white&controls=1&modestbranding=0&playsinline=1&rel=0"}
            allow="accelerometer; modestbranding; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={`w-full h-[480px] float-right xl:ml-10 mb-6 rounded-3xl ${className}`}
        />
    );
};
