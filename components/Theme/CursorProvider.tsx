import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  pointer-events: none;
  z-index: 9999;
`;

export default function CursorProvider() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = e;
      const isTargetLinkOrBtn = (e.target as HTMLElement)?.closest("a") || (e.target as HTMLElement)?.closest("button");

      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        scale: isTargetLinkOrBtn ? 3.5 : 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", () => {
        gsap.to(cursor, {
          duration: 0.7,
          opacity: 0,
        });
      });
    };
  }, [isTouchDevice]);

  return <Cursor ref={cursorRef} />;
}
