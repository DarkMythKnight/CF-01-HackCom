"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
      <DotLottiePlayer
        src="https://lottie.host/0f1c21ec-5a83-4ed8-8225-ff6ae0d7da02/XUTjBYrQOp.json"
        autoplay
        loop
      >
       
      </DotLottiePlayer>
  );
};

export default LottieAnimation;