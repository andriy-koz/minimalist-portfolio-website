import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}
