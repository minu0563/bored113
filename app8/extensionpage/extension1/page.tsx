'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../../components/animation/AnimatedSection';
import ColorChange from '../../components/animation/ColorChange';

export default function ExtensionPage() {
  return (
    <div className="flex flex-col items-center text-center px-6">

      {/* ================= Hero ================= */}
      <section className="mt-32 mb-24">
        <AnimatedSection>
          <h1 className="text-6xl md:text-7xl gold font-bold">
            <ColorChange animate duration={1000}>
              CoCoNuT Extension
            </ColorChange>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            Customize your experience with a clean, minimal,
            and lightweight extension built for focus.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <a
            href="#install"
            className="inline-block mt-12 px-8 py-4 border border-gray-600 gold hover:bg-gray-800 transition"
          >
            Install Extension
          </a>
        </AnimatedSection>
      </section>

      {/* ================= Features ================= */}
      <section className="w-full max-w-5xl mb-32">
        <AnimatedSection>
          <h2 className="text-4xl mb-16">
            What it does
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedSection delay={100}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">Theme Control</h3>
              <p className="text-gray-400">
                Switch between dark and light themes instantly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">Minimal UI</h3>
              <p className="text-gray-400">
                No clutter. Only the settings you actually need.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="border border-gray-600 p-6">
              <h3 className="text-xl mb-3 gold">Fast & Lightweight</h3>
              <p className="text-gray-400">
                Built to stay fast without tracking or bloat.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= Screenshot ================= */}
      <section className="mb-32">
        <AnimatedSection>
          <h2 className="text-4xl mb-12">
            Interface Preview
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <Image
            src="/extension-settings.png"
            alt="Extension settings preview"
            width={700}
            height={420}
            className="border border-gray-600"
          />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="mt-6 text-gray-400">
            The same clean design you see on our website.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= How it works ================= */}
      <section className="mb-32 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-4xl mb-12">
            How it works
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-lg text-gray-400 mb-4">
            1. Install the extension
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 mb-4">
            2. Open the settings panel
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-gray-400 mb-4">
            3. Choose your theme
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-lg text-gray-400">
            4. Enjoy a cleaner experience
          </p>
        </AnimatedSection>
      </section>

      {/* ================= Settings Link ================= */}
      <section className="mb-32">
        <AnimatedSection>
          <h2 className="text-3xl mb-6">
            Settings UI
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <p className="text-gray-400 mb-6">
            Preview the exact interface used in the extension.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Link href="/settings">
            <p className="gold cursor-pointer hover:underline">
              View Settings Page
            </p>
          </Link>
        </AnimatedSection>
      </section>

      {/* ================= Install ================= */}
      <section id="install" className="mb-40">
        <AnimatedSection>
          <h2 className="text-4xl mb-8">
            Ready to try it?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-10 py-4 border border-gray-500 gold hover:bg-gray-800 transition"
          >
            Install from Chrome Web Store
          </a>
        </AnimatedSection>
      </section>

    </div>
  );
}
