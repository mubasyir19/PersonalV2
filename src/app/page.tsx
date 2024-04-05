import About from '@/components/About';
import Hero from '@/components/Hero';
import Skill from '@/components/Skill';
import { SparklesCore } from '@/components/ui/Sparkles';

export default function Home() {
  return (
    <main>
      <div className='h-screen relative flex items-center'>
        <div className='w-full absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />
        </div>
        <h1 className='text-7xl md:rotate-0 md:text-9xl xl:text-[250px] text-center leading-none font-bold bg-texting bg-cover bg-clip-text bg-center text-transparent'>
          Mahdy Mubasyir
        </h1>
      </div>
      {/* <Hero /> */}
      <About />
      <Skill />
    </main>
  );
}
