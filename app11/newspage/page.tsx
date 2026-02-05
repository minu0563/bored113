'use client';
import ColorChange from '../components/animation/ColorChange';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';
import { newsData } from '../data/newsData/newsData';
import NewsCard from '../components/newscard/NewsCard';
import { useState } from 'react';
import { useTheme } from '../components/theme/useTheme';

export default function Home() {
  const [hoveredId, setHoveredID] = useState<number | null>(null);
  const { theme } = useTheme();
  const [Tag, setTag] = useState(0);

  const ONBC =
    theme === 'theme-dark'
      ? 'border-white text-white'
      : 'border-black text-black';

  const OFFBC =
    theme === 'theme-dark'
      ? 'border-gray-400 text-gray-400'
      : 'border-gray-400 text-gray-400';

  return (
    <div className='flex flex-col items-center px-6'>

      {/* ===== Header ===== */}
      <section className="mt-32 mb-12 text-center">
        <AnimatedSection>
          <h1 className="text-6xl gold font-bold">
            <ColorChange animate>
              News
            </ColorChange>
          </h1>
        </AnimatedSection>
        <div className="mt-6 text-xl text-gray-400 max-w-2xl">
          <AnimatedSection delay={150}>
            <p>
              Stay updated on the latest CoCoNuT projects,
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p>including new extensions, web pages, and updates to existing tools.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* News 페이지 카드 */}
      <div className="flex flex-col items-center w-full mt-5">
        {newsData.map((item, index) => (
          <div
            key={item.id}
            className="w-full max-w-5xl"
          >
            <AnimatedSection
              delay={index < 4 ? 600 + (index + 1) * 200 : 50}
              anitype={1}
            >
              <NewsCard
                item={item}
                isHovered={hoveredId === item.id}
                isOtherHovered={hoveredId !== null && hoveredId !== item.id}
                onHover={() => setHoveredID(item.id)}
                onLeave={() => setHoveredID(null)}
              />
            </AnimatedSection>
          </div>
        ))}
      </div>
      {/* 태그 선택용인 */}
      <div className="absolute bottom-20 right-8 flex gap-4">
        <AnimatedSection anitype={1} delay={1000}>
          <button
            onClick={() => setTag(0)}
            className={`px-4 py-2 border ${Tag === 0 ? `${ONBC}` : `${OFFBC}`
              }`}
          >
            All
          </button>
        </AnimatedSection>

        <AnimatedSection anitype={1} delay={1200}>
          <button
            onClick={() => setTag(1)}
            className={`px-4 py-2 border ${Tag === 1 ? `${ONBC}` : `${OFFBC}`
              }`}
          >
            Update
          </button>
        </AnimatedSection>

        <AnimatedSection anitype={1} delay={1400}>
          <button
            onClick={() => setTag(2)}
            className={`px-4 py-2 border ${Tag === 2 ? `${ONBC}` : `${OFFBC}`
              }`}
          >
            Released
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}

