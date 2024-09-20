import React, { useEffect } from "react";
import { preLoaderAnim } from "./PreloaderAnim";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <span>Cosmic</span>
        <span>Gigi</span>
      </div>
    </div>
  );
};

export default Preloader;
