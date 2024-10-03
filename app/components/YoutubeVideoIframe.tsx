import { FC, useState } from "react";
import YouTube from "react-youtube";

interface Props {
    url: string;
    index: number;
    playingId?: string;
    className?: string;
}

export const YoutubeVideoIframe: FC<Props> = ({ url, index, className }) => {
    const opts = {
        height: "460px",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
    const videoId = url.split("https://www.youtube.com/embed/")[1];
    const tmp = videoId + "_" + index;

    return (
        <>
            <YouTube videoId={videoId} id={tmp} opts={opts} />
            {/* {domLoaded && (
                // <div className="relative">
                //     <ReactPlayer url={url} width="100%" className="absolute top-0 left-0 h-[460px]" />
                // </div>
            )} */}
        </>

        // <iframe
        //     src={url + "?autoplay=0&mute=1&loop=0&color=white&controls=1&modestbranding=0&playsinline=1&rel=0"}
        //     allow="accelerometer; modestbranding; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //     referrerPolicy="strict-origin-when-cross-origin"
        //     allowFullScreen
        //     className={`w-full h-[480px] float-right xl:ml-10 mb-6 rounded-3xl ${className}`}
        //     onPlay={() => console.log("play video")}
        // />
    );
};
