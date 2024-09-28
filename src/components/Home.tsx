"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const texts = [
  "A passionate Front-End Developer",
  "A passionate UX/UI Designer",
  "&amp; Website Template Designer" // Escape the ampersand character
];

export default function Home() {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setDisplayText(texts[index]);
        setFade(false); // Start fade in
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500); // seconds of fade out before changing text
    }, 1500); // Change after every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">I&apos;m Muhammad Yousuf,</h1> {/* Use &apos; for single quote */}
        <p className={`text-2xl text-yellow-300 font-light mb-5 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {displayText}
        </p>
        <div className="m-15"> {/* Add margin for spacing */}
          <button className="text-center text-white border border-white rounded-lg bg-cyan-700 px-4 py-2 transition duration-300 hover:bg-cyan-600" type='submit'>
            <Link href="https://static-interactive-resmue.vercel.app" target='blank'>My Resume</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
