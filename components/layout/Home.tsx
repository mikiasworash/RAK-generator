"use client";
import { useState } from "react";
import { SparklesPreview } from "../ui/SparklesPreview";
import ShimmerButton from "../ui/shimmer-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import RAKS from "../../_data/raks";
import Footer from "./Footer";
import { CiShare2 } from "react-icons/ci";
import { toast } from "react-hot-toast";

type RAKSItem = {
  text: string;
  className?: string;
};

type RAKSArrayType = RAKSItem[];

const HomePage = () => {
  const [randomizedWords, setRandomizedWords] = useState<RAKSArrayType>(
    RAKS[0]
  );
  const [rerenderTrigger, setRerenderTrigger] = useState<boolean>(false);

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * RAKS.length);
    setRandomizedWords(RAKS[randomIndex]);
    setRerenderTrigger(!rerenderTrigger);
  };

  const TypewriterWrapper = ({
    words,
    rerenderTrigger,
  }: {
    words: {
      text: string;
      className?: string;
    }[];
    rerenderTrigger?: boolean | undefined;
  }) => {
    return <TypewriterEffectSmooth words={words} />;
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute top-10 md:top-20 right-10 md:right-20 hover:cursor-pointer">
        <CiShare2
          className="share-icon sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          onClick={() => {
            navigator.clipboard.writeText(
              randomizedWords.map((obj) => obj?.text).join(" ")
            );
            toast.success("Copied to clipboard!");
          }}
        />
      </div>

      <div className="w-[90%] flex justify-center mb-10">
        <TypewriterWrapper
          words={randomizedWords}
          rerenderTrigger={rerenderTrigger}
        />
      </div>

      <div className="mb-4">
        <ShimmerButton title="Generate" onClick={handleGenerate} />
      </div>

      <div>
        <SparklesPreview />
      </div>

      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
