import React, { MutableRefObject, useRef } from "react";

import Banner from "../../assets/images/MainBanner.jpeg";

function MainBanner() {
  const blockRef = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: blockRef.current?.clientHeight,
    });
  };

  return (
    <div className="h-screen bg-vBlack relative overflow-hidden" ref={blockRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <h1 className="text-8xl text-white text-center">VIDMAX</h1>
        <h2 className="text-3xl text-white text-center tracking-[40px] indent-[45px]">
          CINEMA
        </h2>
      </div>
      <button
        className="text-xl font-light text-white tracking-widest absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        onClick={handleClick}
      >
        WATCH YOUR REALITY
      </button>
      <img src={Banner} alt="Banner" className="absolute inset-0 z-10" />
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-vBlack" />
    </div>
  );
}

export default MainBanner;
