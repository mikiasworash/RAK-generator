"use client";
import { useState } from "react";
import ShimmerButton from "../ui/shimmer-button";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import RAKS from "../../_data/raks";
import { CiShare2 } from "react-icons/ci";
import { toast } from "react-hot-toast";

type RAKSItem = {
  text: string;
  className?: string;
};

type RAKSArrayType = RAKSItem[];

const Hero = () => {
  const [randomizedWords, setRandomizedWords] = useState<RAKSArrayType>(
    RAKS[0]
  );
  const [rerenderTrigger, setRerenderTrigger] = useState<boolean>(false);
  const [key, setKey] = useState(0);

  const handleGenerate = () => {
    const randomIndex = Math.floor(Math.random() * RAKS.length);
    setRandomizedWords(RAKS[randomIndex]);
    // setRerenderTrigger((prev) => !prev);
    setKey((currentKey) => currentKey + 1);
    console.log(key);
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
    const [rerender, setRerender] = useState(rerenderTrigger);
    return <TypewriterEffectSmooth words={words} />;
  };

  return (
    <>
      <div className="absolute top-20 right-10 md:right-20 hover:cursor-pointer">
        <CiShare2
          className="share-icon text-2xl xl:text-3xl"
          onClick={() => {
            navigator.clipboard.writeText(
              randomizedWords.map((obj) => obj?.text).join(" ")
            );
            toast.success("Copied to clipboard!");
          }}
        />
      </div>

      {/* <div className="w-[90%] flex justify-center mb-10">
        <div
          className="text-lg md:text-3xl lg:text:4xl xl:text-5xl font-bold text-center text-center"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {randomizedWords.map((obj) => obj?.text).join(" ")}
        </div>
      </div> */}

      {/* <div className="w-[90%] flex justify-center mb-10">
        <TypewriterWrapper
          words={randomizedWords}
          rerenderTrigger={rerenderTrigger}
        />
      </div> */}

      <div className="w-[90%] flex justify-center mb-10">
        <TypewriterEffectSmooth words={randomizedWords} key={key} />
      </div>

      <div className="mb-4">
        <ShimmerButton title="Generate" onClick={handleGenerate} />
      </div>
    </>
  );
};
export default Hero;
