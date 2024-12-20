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
    const scale = 2;

    // Set the desired width and height, using the scale factor
    const width = ref.current.offsetWidth * scale;
    const height = ref.current.offsetHeight * scale;

    toPng(ref.current, {
      cacheBust: true,
      width: width, // Set width with device pixel ratio scaling
      height: height, // Set height with device pixel ratio scaling
      style: {
        transform: `scale(${scale})`, // Scale the content to ensure high quality
        transformOrigin: "top left", // Keep the origin top left when scaling
      },
    })
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
        <Invoice />
      </div>

      <button onClick={onButtonClick} className="text-black">
        Click me
      </button>
    </>
  );
};
