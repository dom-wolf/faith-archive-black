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
