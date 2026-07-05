import Navbar from '../components/Navbar';
import BookingContact from '../components/BookingContact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <BookingContact />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
