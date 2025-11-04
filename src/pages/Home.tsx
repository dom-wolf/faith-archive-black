import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import { useLanguage } from '@/contexts/LanguageContext';
import heroKimono from '@/assets/hero-kimono.jpg';
import calligraphy from '@/assets/calligraphy-1.jpg';
import zenGarden from '@/assets/zen-garden.jpg';
import fabricTexture from '@/assets/fabric-texture.jpg';
import incenseSmoke from '@/assets/incense-smoke.jpg';
import washiPaper from '@/assets/washi-paper.jpg';
import inkWater from '@/assets/ink-water.jpg';
import prayerHands from '@/assets/prayer-hands.jpg';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen cursor-dot">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroKimono}
            alt="Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-light tracking-[0.3em] mb-8"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl tracking-widest opacity-70"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-px h-16 bg-foreground opacity-30" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-light tracking-widest leading-relaxed">
              {t.intro.title}
            </h2>
            <p className="text-lg md:text-xl opacity-70 leading-loose tracking-wider">
              {t.intro.body}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Calligraphy Section */}
      <ParallaxSection speed={-0.3}>
        <section className="min-h-screen flex items-center justify-center px-8 py-32">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <img
                src={calligraphy}
                alt="Japanese Calligraphy"
                className="w-full max-w-2xl mx-auto opacity-80"
              />
            </div>
          </FadeInSection>
        </section>
      </ParallaxSection>

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-light tracking-[0.3em] text-center mb-24">
              {t.philosophy.title}
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-16">
            <FadeInSection delay={0.2}>
              <div className="text-center space-y-6 p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500">
                <div className="text-6xl mb-8">衣</div>
                <h3 className="text-2xl tracking-widest">{t.philosophy.faith}</h3>
                <p className="text-sm opacity-60 leading-loose">
                  Each garment carries the weight of belief, woven into its very fabric.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="text-center space-y-6 p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500">
                <div className="text-6xl mb-8">儀</div>
                <h3 className="text-2xl tracking-widest">{t.philosophy.ritual}</h3>
                <p className="text-sm opacity-60 leading-loose">
                  The act of acquisition becomes a sacred ceremony of commitment.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center space-y-6 p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500">
                <div className="text-6xl mb-8">祈</div>
                <h3 className="text-2xl tracking-widest">{t.philosophy.prayer}</h3>
                <p className="text-sm opacity-60 leading-loose">
                  Documentation transcends transaction, becoming an offering to eternity.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Zen Garden Image */}
      <ParallaxSection speed={0.5}>
        <section className="relative h-screen overflow-hidden">
          <FadeInSection>
            <img
              src={zenGarden}
              alt="Zen Garden"
              className="w-full h-full object-cover opacity-60"
            />
          </FadeInSection>
        </section>
      </ParallaxSection>

      {/* Material & Texture */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <FadeInSection>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-light tracking-widest leading-relaxed">
                Materiality of Silence
              </h2>
              <p className="text-lg opacity-70 leading-loose tracking-wide">
                Every thread speaks in whispers. The texture of darkness, the weight of light. 
                Our pieces exist in the space between substance and void.
              </p>
              <p className="text-lg opacity-70 leading-loose tracking-wide">
                Traditional Japanese craftsmanship meets philosophical inquiry. 
                Each work is numbered, documented, and preserved in the blockchain—
                an eternal record of transient beauty.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <img
              src={fabricTexture}
              alt="Fabric Texture"
              className="w-full aspect-square object-cover"
            />
          </FadeInSection>
        </div>
      </section>

      {/* Incense Smoke */}
      <ParallaxSection speed={-0.4}>
        <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
          <div className="absolute inset-0">
            <img
              src={incenseSmoke}
              alt="Incense"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <FadeInSection>
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-7xl font-light tracking-[0.2em]">
                Breath of the Void
              </h2>
              <p className="text-xl opacity-80 leading-loose tracking-wider">
                Like incense rising into darkness, our creations ascend beyond commerce 
                into the realm of meaning. Each piece carries intention, 
                each purchase becomes remembrance.
              </p>
            </div>
          </FadeInSection>
        </section>
      </ParallaxSection>

      {/* Archive Preview */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-5xl md:text-7xl font-light tracking-[0.3em] text-center mb-24">
              ARCHIVE
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-16">
            <FadeInSection delay={0.2}>
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={washiPaper}
                    alt="Work 001"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl tracking-widest">WORK 001</h3>
                  <p className="text-sm opacity-50 tracking-wide">2024.03.15 / Owner: KURO-001</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={inkWater}
                    alt="Work 002"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl tracking-widest">WORK 002</h3>
                  <p className="text-sm opacity-50 tracking-wide">2024.03.20 / Owner: KURO-002</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Prayer Hands */}
      <ParallaxSection speed={0.3}>
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={prayerHands}
              alt="Prayer"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <FadeInSection>
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-6xl md:text-8xl font-light tracking-[0.3em]">祈</h2>
              <p className="text-xl tracking-widest opacity-70">PRAYER AS TRANSACTION</p>
            </div>
          </FadeInSection>
        </section>
      </ParallaxSection>

      {/* Manifesto */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <FadeInSection>
          <div className="max-w-4xl mx-auto space-y-16 text-center">
            <h2 className="text-5xl md:text-7xl font-light tracking-[0.3em] mb-16">
              MANIFESTO
            </h2>
            <div className="space-y-12 text-lg md:text-xl opacity-70 leading-loose tracking-wide">
              <p>
                We reject the superficiality of fast fashion. 
                We embrace the weight of permanence.
              </p>
              <p>
                Every garment is a statement of being. 
                Every purchase, an act of faith. 
                Every record, a prayer to time itself.
              </p>
              <p>
                Through blockchain technology and traditional craftsmanship, 
                we preserve not just objects, but moments of consciousness.
              </p>
              <p className="text-2xl md:text-3xl font-light tracking-[0.2em] pt-8">
                This is the scripture of black.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Final Fade */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="text-8xl mb-8">黒</div>
          <p className="text-sm tracking-[0.3em] opacity-50">KURO ARCHIVE</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-12 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs tracking-widest opacity-50">
          <p>© 2024 KURO ARCHIVE</p>
          <p>FAITH • RITUAL • PRAYER</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
