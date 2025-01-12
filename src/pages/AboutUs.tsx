import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutHero } from '../components/about-hero';
import { AboutContent } from '@/components/about-content';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
