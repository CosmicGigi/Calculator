import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { preLoaderAnim } from "./PreloaderAnim";

const Preloader = ({ setLoading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    preLoaderAnim(setLoading);
  }, [setLoading]);

  const handleClick = useCallback(() => {
    setLoading(false);
    navigate("/");
  }, [navigate, setLoading]);

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
