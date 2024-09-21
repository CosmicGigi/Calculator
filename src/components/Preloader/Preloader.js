import React, { useEffect, useCallback } from "react";
import { preLoaderAnim } from "./PreloaderAnim";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    preLoaderAnim(setLoading);
  }, [setLoading]);

  const handleClick = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="preloader" onClick={handleClick}>
      <div className="texts-container">
        <span>COSMIC GIGI</span>
        <span className="selfdefinition">
          Créativité, Modernité, Performance
        </span>
      </div>
    </div>
  );
};

export default Preloader;
