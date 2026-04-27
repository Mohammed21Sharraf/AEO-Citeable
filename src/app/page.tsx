import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Platforms } from "@/components/platforms";
import { Shift } from "@/components/shift";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Compare } from "@/components/compare";
import { Calculator } from "@/components/calculator";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const SITE_URL = "https://citeable.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Citeable",
  alternateName: "Citeable AEO",
  url: SITE_URL,
  description:
    "Citeable is an Answer Engine Optimisation (AEO) agency for B2B SaaS. We get brands cited by ChatGPT, Perplexity, Gemini, Claude, and Google AI Mode through audits, content restructuring, and citation building.",
  email: "s.business.uddin@gmail.com",
  knowsAbout: [
    "Answer Engine Optimisation",
    "AEO",
    "Generative Engine Optimisation",
    "GEO",
    "AI search visibility",
    "ChatGPT citations",
    "Perplexity citations",
    "Google AI Mode",
    "B2B SaaS marketing",
  ],
  areaServed: "Worldwide",
  sameAs: [
    "https://cal.com/sbusiness-kvxqhq",
    "https://github.com/Mohammed21Sharraf/AEO-Citeable",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "s.business.uddin@gmail.com",
    url: "https://cal.com/sbusiness-kvxqhq",
    availableLanguage: ["English"],
  },
};

export default function Home() {
  return (
    <div className="page-mesh flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Platforms />
        <Shift />
        <Services />
        <Process />
        <Compare />
        <Calculator />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
