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

  const handleWheel = (e: WheelEvent) => {
    if (animating.current) return;

    // 마지막 섹션 도달 전까지 스크롤 막기
    const atLast = active === sectionsData.length - 1;

    if (!atLast) {
      e.preventDefault(); // 마지막 섹션 전까지는 페이지 스크롤 차단
    }

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

  // transition 완료 대기
  useEffect(() => {
    const timeout = setTimeout(() => (animating.current = false), 700);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div>
      {/* 풀페이지 섹션 */}
      <div className="relative w-full h-screen overflow-hidden">
        {sectionsData.map((sec, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-screen flex justify-center items-center text-4xl font-bold text-white transition-transform duration-700 ease-in-out ${sec.bg}`}
            style={{ transform: `translateY(${100 * (idx - active)}%)` }}
          >
            {sec.title}
          </div>
        ))}
      </div>

      {/* 마지막 이후 일반 페이지 영역 */}
      <div className="h-screen bg-white flex justify-center items-center">
        <p className="text-4xl text-black">Regular scroll area after last section</p>
      </div>

      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <p className="text-4xl text-black">More content...</p>
      </div>
    </div>

  );
}
