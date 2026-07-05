import Navbar from '../components/Navbar';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <About />
        <WhyUs />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
