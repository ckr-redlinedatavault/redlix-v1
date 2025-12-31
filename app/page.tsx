import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollingBar from '@/components/ScrollingBar';
import ClientCompanies from '@/components/ClientCompanies';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollingBar />
      <ClientCompanies />
      <Services />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
