"use client";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import Invoice from "./Invoice";
export const PDF = () => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
  <>
  <div className="w-full" ref={ref}>
    <Invoice/>
  </div>

<button onClick={onButtonClick} className='text-white'>Click me</button>
    </>      
  );
};
