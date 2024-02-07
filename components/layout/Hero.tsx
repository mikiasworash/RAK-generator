"use client";
import { useState } from "react";
import { SparklesPreview } from "../ui/SparklesPreview";
import ShimmerButton from "../ui/shimmer-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import RAKS from "../../_data/raks";
import Footer from "./Footer";

const Hero = () => {
  const [randomizedWords, setRandomizedWords] = useState(RAKS[0]);
  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * RAKS.length);
    setRandomizedWords(RAKS[randomIndex]);
  };
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-[90%] flex justify-center mb-10">
        <TypewriterEffectSmooth words={randomizedWords} />
      </div>
      <ShimmerButton
        title="Generate"
        onClick={handleGenerate}
        className="mb-4"
      />
      <SparklesPreview />

      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};
export default Hero;
