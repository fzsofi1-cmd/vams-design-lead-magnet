import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wall.jpg";
import detailImage from "@/assets/vams-showcase.png";
import beforeAfterImage from "@/assets/before-after.jpg";

const ctaLink = "#referencia";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Biophilic fal installáció egy modern irodában"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 animate-fade-up">
        Az irodád működik.
        <br />
        <span className="text-gradient-gold italic">De nem hagy nyomot.</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Vams Design – biophilic fal installációk, amelyek meghatározzák a tér karakterét.
      </p>
      <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a href={ctaLink}>
          <Button variant="hero" size="lg" className="px-10 py-6 text-sm">
            Jelentkezem referencia projektre
          </Button>
        </a>
        <p className="text-muted-foreground text-sm mt-4 tracking-wide">
          Csak 2 iroda kerül kiválasztásra.
        </p>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
          A legtöbb iroda ma <span className="italic text-gradient-gold">így</span> néz ki:
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: "□", text: "Funkcionálisan jól működik, vizuálisan karaktertelen" },
          { icon: "◇", text: "Nincs identitása – nem tükrözi a brandet" },
          { icon: "○", text: "Nem fotogén, nem megosztható, nem emlékezetes" },
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className="bg-secondary/50 border border-border p-8 text-center">
              <span className="text-gold text-3xl block mb-4">{item.icon}</span>
              <p className="text-secondary-foreground font-light leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-center text-muted-foreground text-lg italic">
          Hatékony. De személytelen. <span className="text-foreground">Ez változhat.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 md:py-32 px-6 bg-charcoal-light">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-serif text-4xl md:text-6xl text-center mb-6">
          Nem dekoráció. <span className="text-gradient-gold italic">Fókuszpont.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Organikus, de kontrollált. Rétegzett 3D struktúra, integrált növények és megvilágítás – minden elem a tér hangulatát szolgálja. Nem kiegészítő, hanem kiindulópont.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="max-w-4xl mx-auto overflow-hidden">
          <img
            src={detailImage}
            alt="Biophilic fal installáció részlet – textúra és fény"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full h-auto object-cover"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const WhatWeDoSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
      <ScrollReveal>
        <div>
          <h3 className="font-serif text-2xl mb-8 text-foreground/70">Amit <span className="italic">nem</span> csinálunk</h3>
          <ul className="space-y-4">
            {[
              "Moha panel falak",
              "Dzsungel fal káosz",
              "Steril, ismétlődő minták",
              "Kontrollálatlan naturalizmus",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/60 font-light">
                <span className="text-foreground/40 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div>
          <h3 className="font-serif text-2xl mb-8 text-foreground">Amit <span className="italic text-gradient-gold">igen</span></h3>
          <ul className="space-y-4">
            {[
              "Organikus, kontrollált kompozíció",
              "Egyértelmű fókuszpont",
              "Rétegzett 3D struktúra",
              "Tudatos anyaghasználat",
              "Integrált növények és megvilágítás",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground font-light">
                <span className="text-gold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const DesireSection = () => (
  <section className="py-24 md:py-32 px-6 bg-charcoal-light">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">
          Képzeld el, hogy az irodád:
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
        {[
          "Azonnal figyelmet vonz",
          "Fotózható és megosztható",
          "Emlékezetes élményt hagy a látogatókban",
          "Vizuálisan összhangban van a brandeddel",
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="border border-border p-6 text-center">
              <p className="text-foreground font-light">{item}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={400}>
        <div className="max-w-5xl mx-auto overflow-hidden">
          <img
            src={beforeAfterImage}
            alt="Iroda átalakítás – előtte és utána"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ReferenceSection = () => (
  <section id="referencia" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">Limitált program</p>
        <h2 className="font-serif text-3xl md:text-5xl mb-8">
          Referencia Partner Program
          <br />
          <span className="text-gradient-gold italic">– 2 iroda</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          A Vams Design 2 irodát választ ki referencia projekthez – prémium installáció különleges feltételekkel, cserébe fotózási jogokért és ajánlásért.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="border border-border p-10 mb-12 bg-secondary/30">
          <h3 className="font-serif text-xl mb-6 text-foreground">Amit kapsz:</h3>
          <ul className="space-y-3 text-secondary-foreground font-light">
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Professzionális fotódokumentáció a térről
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Tartalom, amit social mediára és brand anyagokhoz használhatsz
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Egy tér, ami vizuális identitás-elemmé válik
            </li>
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <a href="mailto:hello@vamsdesign.com?subject=Referencia%20Partner%20Program%20-%20Jelentkez%C3%A9s">
          <Button variant="hero" size="lg" className="px-12 py-6 text-sm">
            Jelentkezem referencia projektre
          </Button>
        </a>
        <p className="text-muted-foreground text-sm mt-4 italic">
          A program limitált – a helyek gyorsan betölnek.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
      <span className="font-serif text-2xl text-gradient-gold">Vams Design</span>
      <p className="text-muted-foreground text-sm font-light">
        Biophilic fal installációk, amelyek meghatározzák a tér karakterét.
      </p>
      <a href={ctaLink} className="text-gold text-sm uppercase tracking-widest hover:text-foreground transition-colors">
        Jelentkezem →
      </a>
    </div>
  </footer>
);

const Index = () => (
  <>
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <WhatWeDoSection />
    <DesireSection />
    <ReferenceSection />
    <Footer />
  </>
);

export default Index;
