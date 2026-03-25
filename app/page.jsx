import About from './components/About';
import Inicio from './components/Inicio';
import Programs from './components/Programs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Inicio />
      <About />
      <Programs />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
