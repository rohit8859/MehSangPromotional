import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <Pricing />
      </div>
      <Footer />
    </>
  );
}
