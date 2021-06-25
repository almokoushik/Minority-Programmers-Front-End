import React from 'react';
import video from "../../images/video.mp4"

const VIdeoPlayer = () => {
    return (
        <div>
            <video src={video} controls className="w-100" controlsList="nodownload"></video>
        </div>
    );
};

export default VIdeoPlayer;