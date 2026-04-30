import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Platforms } from "@/components/platforms";
import { Shift } from "@/components/shift";
import { Services, services } from "@/components/services";
import { Process, processSteps } from "@/components/process";
import { Compare } from "@/components/compare";
import { Calculator } from "@/components/calculator";
import { Faq, faqItems } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const SITE_URL = "https://citeable.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Citeable",
  description:
    "Answer Engine Optimisation agency for B2B SaaS — audits, content restructuring, and citation building so AI engines cite your brand.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: it.a,
    },
  })),
};

const serviceSchemas = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  serviceType: s.title,
  description: s.summary,
  category: s.price,
  url: `${SITE_URL}/#services`,
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "B2B SaaS companies",
  },
  provider: { "@id": ORG_ID },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${s.title} deliverables`,
    itemListElement: s.deliverables.map((d, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: d,
      },
    })),
  },
}));

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "From invisible to cited in 90 days",
  description:
    "Citeable's four-step Answer Engine Optimisation process for B2B SaaS: Audit, Restructure, Cite, Measure.",
  totalTime: "P90D",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
    url: `${SITE_URL}/#process`,
  })),
};

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    faqSchema,
    howToSchema,
    ...serviceSchemas,
  ],
};

export default function Home() {
  return (
    <div className="page-mesh flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
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
