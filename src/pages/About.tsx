import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import prayerHands from '@/assets/prayer-hands.jpg';
import zenGarden from '@/assets/zen-garden.jpg';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen cursor-dot">
      <Navigation />

      <div className="pt-32 px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] mb-24">
            {t.about.title}
          </h1>

          <FadeInSection>
            <div className="space-y-12 text-xl opacity-80 leading-loose tracking-wide mb-32">
              <p>
                {t.about.body}
              </p>
              <p>
                我々は単なるブランドではない。思想の実装である。
                衣服という物理的媒体を通じて、信仰という抽象概念を具現化する。
              </p>
              <p>
                We are not merely a brand. We are the implementation of thought itself.
                Through the physical medium of clothing, we manifest the abstract concept of faith.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative h-[60vh] mb-32 overflow-hidden">
              <img
                src={prayerHands}
                alt="Prayer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-6xl font-light tracking-[0.3em]">信仰</h2>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="space-y-16 mb-32">
              <div>
                <h2 className="text-4xl font-light tracking-widest mb-8">The Philosophy</h2>
                <div className="space-y-8 text-lg opacity-70 leading-loose">
                  <p>
                    In a world consumed by excess and disposability, we propose an alternative: 
                    conscious consumption as spiritual practice. Each piece we create carries intention. 
                    Each purchase becomes an act of mindful commitment.
                  </p>
                  <p>
                    過剰と使い捨ての世界において、我々は別の道を提案する：
                    意識的な消費を精神的実践として。創作する各作品は意図を宿す。
                    各購入行為は、意識的なコミットメントとなる。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-light tracking-widest mb-8">The Structure</h2>
                <div className="space-y-8 text-lg opacity-70 leading-loose">
                  <p>
                    Our system integrates blockchain technology not as gimmick, but as necessity. 
                    IPFS ensures permanent documentation. Smart contracts encode the relationship 
                    between creator and collector. This is structure as aesthetic—
                    beauty found in the architecture of permanence.
                  </p>
                  <p>
                    我々のシステムは、ブロックチェーン技術をギミックとしてではなく、
                    必要性として統合する。IPFSは永続的な記録を保証する。
                    スマートコントラクトは、創造者とコレクターの関係を符号化する。
                    これは構造としての美学——永続性の建築に見出される美である。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-light tracking-widest mb-8">The Practice</h2>
                <div className="space-y-8 text-lg opacity-70 leading-loose">
                  <p>
                    We produce slowly. Intentionally. Every work is numbered, documented, 
                    and traceable from conception through eternity. Buyers may choose to add 
                    their story to the record—a personal prayer inscribed in the ledger of time.
                  </p>
                  <p>
                    我々はゆっくりと制作する。意図的に。すべての作品には番号が付けられ、
                    記録され、構想から永遠まで追跡可能である。購入者は自身の物語を
                    記録に追加することができる——時間の台帳に刻まれた個人的な祈りとして。
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="relative h-[60vh] mb-32 overflow-hidden">
              <img
                src={zenGarden}
                alt="Zen Garden"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <h2 className="text-5xl font-light tracking-[0.3em]">Structure as Aesthetic</h2>
                  <p className="text-xl opacity-70 tracking-widest">{t.about.concept}</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="space-y-12 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl font-light tracking-[0.3em] mb-12">The Vision</h2>
              <p className="text-xl opacity-80 leading-loose tracking-wide">
                We envision a future where every object carries meaning. 
                Where commerce and consciousness converge. 
                Where the act of creation and acquisition both become forms of prayer.
              </p>
              <p className="text-xl opacity-80 leading-loose tracking-wide">
                我々は、すべての物体が意味を持つ未来を思い描く。
                商業と意識が収束する場所。
                創造と獲得の行為がともに祈りの形となる場所。
              </p>
              <div className="pt-12">
                <p className="text-3xl font-light tracking-[0.2em]">This is the scripture of black.</p>
                <p className="text-3xl font-light tracking-[0.2em] mt-4">これは黒の聖典である。</p>
              </div>
            </div>
          </FadeInSection>
        </motion.div>
      </div>

      <footer className="border-t border-foreground/10 py-12 px-8 mt-24">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-xs tracking-widest opacity-50">
          <p>© 2024 KURO ARCHIVE</p>
          <p>THOUGHT MADE MANIFEST</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
