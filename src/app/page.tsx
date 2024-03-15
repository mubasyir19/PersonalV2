'use client';

import About from '@/components/About';
import Hero from '@/components/Hero';
import Skill from '@/components/Skill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <Skill />
    </main>
  );
}
