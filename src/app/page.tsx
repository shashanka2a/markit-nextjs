import { Hero } from '@/components/Hero';
import { ProductsGrid } from '@/components/ProductsGrid';
import { WorkflowCTA } from '@/components/WorkflowCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] dark">
      <Hero />
      <ProductsGrid />
      <WorkflowCTA />
      <Footer />
    </div>
  );
}
