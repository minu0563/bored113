"use client";

import { useRef, useState, useEffect } from "react";

const sectionsData = [
  { title: "Section 1", bg: "bg-red-300" },
  { title: "Section 2", bg: "bg-blue-300" },
  { title: "Section 3", bg: "bg-green-300" },
  { title: "Section 4", bg: "bg-yellow-300" },
];

export default function FullpageScroll() {
  const [active, setActive] = useState(0);
  const animating = useRef(false);

  // wheel 이벤트 처리
  const handleWheel = (e: WheelEvent) => {
    if (animating.current) return;

    if (e.deltaY > 0 && active < sectionsData.length - 1) {
      animating.current = true;
      setActive((i) => i + 1);
    } else if (e.deltaY < 0 && active > 0) {
      animating.current = true;
      setActive((i) => i - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active]);

  // transition 완료 기다리기
  useEffect(() => {
    const timeout = setTimeout(() => (animating.current = false), 700);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {sectionsData.map((sec, idx) => (
        <div
          key={idx}
          className={`
            w-full h-screen flex justify-center items-center text-4xl font-bold text-white
            absolute top-0 left-0
            transition-transform duration-700 ease-in-out
            ${sec.bg}
          `}
          style={{ transform: `translateY(${100 * (idx - active)}%)` }}
        >
          {sec.title}
        </div>
      ))}
    </div>
  );
}
