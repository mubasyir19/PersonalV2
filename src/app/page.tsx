import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skill";
import { SparklesCore } from "@/components/ui/Sparkles";

export default function Home() {
  return (
    <main>
      <div className="relative flex h-screen items-center">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="bg-texting bg-cover bg-clip-text bg-center text-center text-7xl font-bold leading-none text-transparent md:rotate-0 md:text-9xl xl:text-[250px]">
          Mahdy Mubasyir
        </h1>
      </div>
      {/* <Hero /> */}
      <About />
      <Skill />
      <Portfolio />
      <Footer />
    </main>
  );
}
