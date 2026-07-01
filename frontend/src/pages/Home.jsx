import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Instagram from '../components/Instagram';
import FAQ from '../components/FAQ';
import BookingContact from '../components/BookingContact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <Pricing />
      <Instagram />
      <FAQ />
      <BookingContact />
      <Footer />
    </>
  );
}
