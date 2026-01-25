'use client';

import { useState } from "react";
import { getTheme } from "../components/theme/useTheme";

interface Props {
  page: number;
  setPage: (v: number) => void;
}

export default function SlideNav({ page, setPage }: Props) {
  const themeName = getTheme();
  const [buttonColor, changeButtonColor] = useState();

  if (themeName === "dark") {
    
  }

  return (
    <div className="absolute bottom-1 right-8 flex gap-4">
      <button
        onClick={() => setPage(0)}
        className={`px-4 py-2 border ${
          page === 0 ? 'border-white text-white' : 'border-gray-500 text-gray-500'
        }`}
      >
        Portfolio
      </button>

      <button
        onClick={() => setPage(1)}
        className={`px-4 py-2 border ${
          page === 1 ? 'border-white text-white' : 'border-gray-500 text-gray-500'
        }`}
      >
        Settings
      </button>
    </div>
  );
}
