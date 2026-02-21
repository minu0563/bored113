'use client';

import { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import Settings from './Settings';
import SlideNav from './SlideNav';
import { useAboutPageStore } from '../store/aboutPageStore';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { page, setPage } = useAboutPageStore();

  // 렌더링 클라이언트에서만되게
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
      <div className="relative w-full min-h-[calc(100vh-120px)] overflow-x-hidden overflow-y-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          <section className="w-full shrink-0 min-h-[calc(100vh-120px)] flex flex-col">
            <Portfolio />
          </section>

          <section className="w-full shrink-0 min-h-[calc(100vh-120px)] flex flex-col">
            <Settings />
          </section>
        </div>

        <span className='@container'>
          <div
            className={`
              absolute
              ${page === 0 ? "top-30 right-27 sm:right-5 @4xl:top-55" : "bottom-10 right-8"} 
              2xl:bottom-4 2xl:right-8
            `}
            >
            <SlideNav page={page} setPage={setPage} />
          </div>
        </span>
      </div>

  );
}
