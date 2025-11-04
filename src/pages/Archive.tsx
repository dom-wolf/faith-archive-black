import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import washiPaper from '@/assets/washi-paper.jpg';
import inkWater from '@/assets/ink-water.jpg';
import fabricTexture from '@/assets/fabric-texture.jpg';
import calligraphy from '@/assets/calligraphy-1.jpg';
import zenGarden from '@/assets/zen-garden.jpg';
import incenseSmoke from '@/assets/incense-smoke.jpg';

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

const works = [
  {
    id: 'WORK-001',
    title: 'Black Kimono Robe',
    date: '2024.03.15',
    owner: 'KURO-001',
    cid: 'bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi',
    image: washiPaper,
    description: 'Traditional silk kimono robe, hand-dyed in pure black. A meditation on absence.',
  },
  {
    id: 'WORK-002',
    title: 'Ink Flow Series',
    date: '2024.03.20',
    owner: 'KURO-002',
    cid: 'bafybeihdwdcefgh4dqkjv7pxqvz5rhhrwwyxgqxgrdcx3vctvs6mfxqfti',
    image: inkWater,
    description: 'Limited edition print exploring the dissolution of form into void.',
  },
  {
    id: 'WORK-003',
    title: 'Woven Silence',
    date: '2024.03.25',
    owner: 'KURO-003',
    cid: 'bafybeiezzkfv3pqvmvlkwhlzxvq5raxqmhzxqbvxqavbvzxcvbqwertyui',
    image: fabricTexture,
    description: 'Hand-woven textile piece embodying the texture of contemplation.',
  },
  {
    id: 'WORK-004',
    title: 'Calligraphy Zero',
    date: '2024.04.01',
    owner: 'KURO-004',
    cid: 'bafybeiczsscdsbs5ftdngrqw6aw3mbubrjfkdaaw4qixohhcagjfmxhvq4',
    image: calligraphy,
    description: 'Original calligraphy work: the character for emptiness, rendered in absence.',
  },
  {
    id: 'WORK-005',
    title: 'Garden of Stillness',
    date: '2024.04.10',
    owner: 'KURO-005',
    cid: 'bafybeidtb6gvxqvgvqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxq',
    image: zenGarden,
    description: 'Photographic meditation on the architecture of tranquility.',
  },
  {
    id: 'WORK-006',
    title: 'Breath Rising',
    date: '2024.04.15',
    owner: 'KURO-006',
    cid: 'bafybeibqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqvxqv',
    image: incenseSmoke,
    description: 'Captured moment of incense ascending—ephemeral made eternal.',
  },
];

const Archive = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen cursor-dot">
      <Navigation />

      <div className="pt-32 px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] mb-8">
            {t.nav.archive}
          </h1>
          <p className="text-xl opacity-70 tracking-wider mb-24 max-w-3xl">
            A permanent record of faith. Each work is documented on IPFS, 
            preserving the moment of creation and acquisition for eternity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {works.map((work, index) => (
              <FadeInSection key={work.id} delay={index * 0.1}>
                <div className="group cursor-pointer space-y-6">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl tracking-widest font-light">{work.id}</h3>
                    <h4 className="text-lg opacity-80">{work.title}</h4>
                    
                    <div className="space-y-1 text-sm opacity-50">
                      <p>Date: {work.date}</p>
                      <p>Owner: {work.owner}</p>
                    </div>

                    <p className="text-sm opacity-70 leading-relaxed pt-2">
                      {work.description}
                    </p>

                    <div className="pt-4 border-t border-foreground/10">
                      <p className="text-xs opacity-40 tracking-wider">CID</p>
                      <p className="text-xs opacity-60 font-mono break-all pt-1">{work.cid}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.8}>
            <div className="mt-32 text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl font-light tracking-widest">The Eternal Ledger</h2>
              <p className="text-lg opacity-70 leading-loose">
                Every piece in this archive exists simultaneously in physical and digital realms. 
                Through IPFS technology, we ensure that these records—these prayers—
                remain accessible as long as the network exists. 
                This is faith made immutable.
              </p>
            </div>
          </FadeInSection>
        </motion.div>
      </div>

      <footer className="border-t border-foreground/10 py-12 px-8 mt-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest opacity-50">
          <p>© 2024 KURO ARCHIVE</p>
          <p>PERMANENCE THROUGH TECHNOLOGY</p>
        </div>
      </footer>
    </div>
  );
};

export default Archive;
