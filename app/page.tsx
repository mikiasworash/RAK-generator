import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import NavBar from "@/components/layout/NavBar";
import { SparklesPreview } from "@/components/ui/SparklesPreview";

export default function Home() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute top-0 md:top-5 left-10 md:left-16">
        <NavBar />
      </div>

      <Hero />

      <div>
        <SparklesPreview />
      </div>

      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
