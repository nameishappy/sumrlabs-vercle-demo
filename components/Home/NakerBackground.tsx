import React, { useEffect, useRef } from "react";

const NakerBackground: React.FC = () => {
  const nakerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nakerRef.current) {
      // Append the Naker.io script to the specific div (scoped background)
      const script = document.createElement("script");
      script.src =
        "https://d23jutsnau9x47.cloudfront.net/back/v1.0.1/viewer.js";
      script.setAttribute("data-who", "💎 Made with naker.io 💎");
      script.setAttribute(
        "data-back",
        JSON.stringify({
          particle: {
            direction1: { x: 0, y: 100, z: 100 },
            direction2: { x: 0, y: 0, z: 0 },
            life: 2,
            power: 0.01,
            texture:
              "/Plus.png",
            number: 10,
            colorStart: [91, 76, 148, 1],
            colorEnd: [174, 203, 243, 1],
            sizeStart: 0.3,
            sizeEnd: 0.6,
          },
          environment: {
            gradient: "radial",
            sensitivity: 0.8,

            colorStart: [52, 60, 237, 1],
            colorEnd: [105, 135, 245, 1],
          },
        })
      );
      nakerRef.current.appendChild(script);

      return () => {
        // Cleanup: Remove script and any potential side effects on unmount
        if (nakerRef.current) {
          nakerRef.current.innerHTML = ""; // Clean up injected script
        }
      };
    }
  }, []);

  return <div ref={nakerRef} className="absolute inset-0 z-[-1]" />; // Ensure z-index is low
};

export default NakerBackground;
