import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'jp' | 'en';

interface Translations {
  nav: {
    home: string;
    archive: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    body: string;
  };
  philosophy: {
    title: string;
    faith: string;
    ritual: string;
    prayer: string;
  };
  about: {
    title: string;
    concept: string;
    body: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  materiality: {
    title: string;
    body1: string;
    body2: string;
  };
  breath: {
    title: string;
    body: string;
  };
  archive: {
    title: string;
  };
  manifesto: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  jp: {
    nav: {
      home: 'ホーム',
      archive: 'アーカイブ',
      about: '理念',
      contact: '問い合わせ',
    },
    hero: {
      title: '信仰と黒のアーカイブ',
      subtitle: '静寂を通して、存在を記録する',
    },
    intro: {
      title: 'これは店ではない。黒の聖典である。',
      body: '衣服とは信仰であり、購入とは儀式である。そして記録とは祈りである。我々は単なる販売を超えた、思想と存在の記録システムを構築する。',
    },
    philosophy: {
      title: '哲学',
      faith: '衣服 = 信仰',
      ritual: '購入 = 儀式',
      prayer: '記録 = 祈り',
    },
    about: {
      title: '理念',
      concept: '構造としての美学',
      body: '我々は衣服を通じて信仰を表現し、購入を通じて儀式を執り行い、記録を通じて祈りを捧げる。これは単なるeコマースではなく、思想の記録装置である。',
    },
    contact: {
      title: '問い合わせ',
      name: '名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      submit: '送信',
    },
    materiality: {
      title: '沈黙の物質性',
      body1: 'すべての糸は囁きで語る。闇の質感、光の重み。我々の作品は、物質と虚無の間の空間に存在する。',
      body2: '伝統的な日本の職人技と哲学的探求の融合。各作品は番号付けされ、記録され、ブロックチェーンに保存される—儚い美の永遠の記録。',
    },
    breath: {
      title: '虚空の息吹',
      body: '闇に立ち昇る香のように、我々の創造物は商業を超えて意味の領域へと昇華する。各作品は意図を運び、各購入は記憶となる。',
    },
    archive: {
      title: 'アーカイブ',
    },
    manifesto: {
      title: 'マニフェスト',
      text1: '我々はファストファッションの表面性を拒絶する。永続性の重みを受け入れる。',
      text2: 'すべての衣服は存在の表明である。すべての購入は信仰の行為である。すべての記録は時間そのものへの祈りである。',
      text3: 'ブロックチェーン技術と伝統的な職人技を通じて、我々は単なる物体ではなく、意識の瞬間を保存する。',
      text4: 'これが黒の聖典である。',
    },
    footer: {
      copyright: '© 2024 黒アーカイブ',
      tagline: '信仰・儀式・祈り',
    },
  },
  en: {
    nav: {
      home: 'HOME',
      archive: 'ARCHIVE',
      about: 'ABOUT',
      contact: 'CONTACT',
    },
    hero: {
      title: 'The archive of faith and black',
      subtitle: 'Existence, traced through silence',
    },
    intro: {
      title: 'This is not a shop. It is a scripture of black.',
      body: 'Clothing is faith. Purchase is ritual. Record is prayer. We build a system for recording ideas and existence, beyond mere commerce.',
    },
    philosophy: {
      title: 'PHILOSOPHY',
      faith: 'CLOTHING = FAITH',
      ritual: 'PURCHASE = RITUAL',
      prayer: 'RECORD = PRAYER',
    },
    about: {
      title: 'ABOUT',
      concept: 'Structure as Aesthetic',
      body: 'We express faith through clothing, perform rituals through purchase, and offer prayers through records. This is not just e-commerce—it is a device for documenting thought.',
    },
    contact: {
      title: 'CONTACT',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
    },
    materiality: {
      title: 'Materiality of Silence',
      body1: 'Every thread speaks in whispers. The texture of darkness, the weight of light. Our pieces exist in the space between substance and void.',
      body2: 'Traditional Japanese craftsmanship meets philosophical inquiry. Each work is numbered, documented, and preserved in the blockchain—an eternal record of transient beauty.',
    },
    breath: {
      title: 'Breath of the Void',
      body: 'Like incense rising into darkness, our creations ascend beyond commerce into the realm of meaning. Each piece carries intention, each purchase becomes remembrance.',
    },
    archive: {
      title: 'ARCHIVE',
    },
    manifesto: {
      title: 'MANIFESTO',
      text1: 'We reject the superficiality of fast fashion. We embrace the weight of permanence.',
      text2: 'Every garment is a statement of being. Every purchase, an act of faith. Every record, a prayer to time itself.',
      text3: 'Through blockchain technology and traditional craftsmanship, we preserve not just objects, but moments of consciousness.',
      text4: 'This is the scripture of black.',
    },
    footer: {
      copyright: '© 2024 KURO ARCHIVE',
      tagline: 'FAITH • RITUAL • PRAYER',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('jp');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
