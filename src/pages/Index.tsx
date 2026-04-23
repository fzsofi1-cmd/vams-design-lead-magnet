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
      {/* Stronger contrast: deeper base + bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
      <p className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 animate-fade-up">
        Biophilic fal installáció irodákba
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 animate-fade-up text-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
        Nem háttér.
        <br />
        <span className="text-gradient-gold italic">Fókuszpont.</span>
      </h1>
      <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light animate-fade-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]" style={{ animationDelay: "0.2s" }}>
        Az irodád a leghangosabb branding eszközöd — és most épp azt mondja, hogy átlagos.
      </p>
      <p className="text-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light animate-fade-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]" style={{ animationDelay: "0.3s" }}>
        Fotózható. Megosztható. Emlékezetes.
      </p>
      <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a href={ctaLink}>
          <Button variant="hero" size="lg" className="px-10 py-6 text-sm">
            Jelentkezem referencia projektre
          </Button>
        </a>
        <p className="text-foreground/70 text-sm mt-4 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-6">
          A legtöbb iroda jól működik.
          <br />
          <span className="italic text-gradient-gold">De semmit nem mond.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Monitorok. Fehér falak. Funkció. Minden a helyén van — csak karakter nincs. A vendégeid belépnek, körbenéznek… és semmi nem marad meg.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: "□", text: "Funkcionális, de vizuálisan unalmas" },
          { icon: "◇", text: "Nincs identitás — nem tükrözi a brandet" },
          { icon: "○", text: "Nem fotogén, nem lesz belőle tartalom" },
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className="bg-secondary/50 border border-border p-8 text-center h-full">
              <span className="text-gold text-3xl block mb-4">{item.icon}</span>
              <p className="text-secondary-foreground font-light leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="text-center text-muted-foreground text-lg italic">
          Ez nem esztétikai kérdés. <span className="text-foreground">Ez branding kérdés.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 md:py-32 px-6 bg-charcoal-light">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-6">Az irodád mint branding eszköz</p>
        <h2 className="font-serif text-4xl md:text-6xl text-center mb-6">
          Nem zöldfal. <span className="text-gradient-gold italic">Biophilic fal installáció.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          A „zöldfal" dekoráció. A biophilic fal installáció a tér identitása. Organikus, de kontrollált kompozíció. Rétegzett, 3D struktúra. Integrált fények. Nem növényeket rakunk a falra — fókuszpontot tervezünk.
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
              "Sablon zöldfalak",
              "Steril, ismétlődő minták",
              "Kontroll nélküli „természetesség”",
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
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-6">
          Az a fal, <span className="italic text-gradient-gold">amire emlékeznek.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Belép az ügyfeled. Megáll. Lefotózza. Megosztja. Ez nem véletlen — ez tervezés.
        </p>
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

const AudienceSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-serif text-3xl md:text-5xl mb-6">
          Kinek <span className="italic text-gradient-gold">szól</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <p className="text-muted-foreground text-lg font-light mb-12">
          Ez nem dekoráció. Akkor jelentkezz, ha fontos, mit kommunikál a tered.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          "Startup irodák",
          "Kreatív ügynökségek",
          "Coworking terek",
          "Image-tudatos csapatok",
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="border border-border p-6">
              <p className="text-foreground font-light text-sm">{item}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={300}>
        <div className="max-w-2xl mx-auto text-left border-l-2 border-gold pl-6">
          <p className="text-foreground/80 font-light mb-2">Akkor jelentkezz, ha:</p>
          <ul className="space-y-2 text-foreground/70 font-light">
            <li>— fontos, mit kommunikál a tered</li>
            <li>— számít, mit visznek magukkal a vendégeid</li>
            <li>— a design üzleti eszköz nálad</li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ReferenceSection = () => (
  <section id="referencia" className="py-24 md:py-32 px-6 bg-charcoal-light">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">Két hely maradt</p>
        <h2 className="font-serif text-3xl md:text-5xl mb-8">
          Referencia program
          <br />
          <span className="text-gradient-gold italic">– limitált lehetőség</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Két irodát választunk ki referencia partnernek. Nem többet.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="border border-border p-10 mb-12 bg-secondary/30">
          <h3 className="font-serif text-xl mb-6 text-foreground">Amit kapsz:</h3>
          <ul className="space-y-3 text-secondary-foreground font-light">
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Teljes tervezés és kivitelezés
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Egyedi biophilic fal installáció
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Fotó és videó dokumentáció
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-gold">—</span>
              Egy tér, ami a branded része lesz
            </li>
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <p className="font-serif text-2xl md:text-3xl text-foreground mb-8 italic">
          Te leszel az egyik?
        </p>
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
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
      <span className="font-serif text-2xl text-gradient-gold">Vams Design</span>
      <p className="text-muted-foreground text-sm font-light italic">
        Nem dekorálunk. Fókuszpontot hozunk létre.
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
    <AudienceSection />
    <ReferenceSection />
    <Footer />
  </>
);

export default Index;
