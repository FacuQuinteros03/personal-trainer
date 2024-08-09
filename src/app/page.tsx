import About from '@/app/components/About';
import Inicio from '@/app/components/Inicio';
import Programs from '@/app/components/Programs';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Inicio />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </>
  );
}
