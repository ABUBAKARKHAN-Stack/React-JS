import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function HeroSection() {
  const topText = "Let's Code";
  const bottomText = "With Abubakar";

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.top-letter', { duration: 0.4, y: -100, stagger: 0.1 });
    tl.from('.bottom-letter', { duration: 0.4, y: 100, stagger: 0.1 }, '<'); // '<' aligns the second animation to the end of the first
  });

  return (
    <div className="into w-full h-full flex justify-center items-center text-blue-200 text-4xl font-bold">
      <div className="h-10 flex gap-x-2 justify-center items-center overflow-hidden">
        <span className="top">
          {topText.split("").map((letter, index) => (
            <span className="top-letter tracking-widest inline-block" key={index}>
              {letter}
            </span>
          ))}
        </span>
        <span className="bottom">
          {bottomText.split("").map((letter, index) => (
            <span className="bottom-letter tracking-widest inline-block" key={index}>
              {letter}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
