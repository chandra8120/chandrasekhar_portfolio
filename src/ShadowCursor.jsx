import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`;
const Cursor = styled.div`
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(137, 207, 240);
  transform: translate(-50%, -50%);
  animation: ${blink} 0.8s linear infinite;
`;
// rgb(0, 255, 255)
const ShadowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  );
};

export default ShadowCursor;
