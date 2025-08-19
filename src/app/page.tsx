import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import PlatformDemo from '../components/PlatformDemo';
import Results from '../components/Results';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <HowItWorks />
      <Products />
      <PlatformDemo />
      <Results />
      <CTA />
      <Footer />
    </main>
  );
}
