import About from '@/components/About';
import Hero from '@/components/Hero';
import Skill from '@/components/Skill';

export default function Home() {
  return (
    <main>
      <div className='h-screen flex items-center'>
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
