import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Platforms } from "@/components/platforms";
import { Shift } from "@/components/shift";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Compare } from "@/components/compare";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="page-mesh flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Platforms />
        <Shift />
        <Services />
        <Process />
        <Compare />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
