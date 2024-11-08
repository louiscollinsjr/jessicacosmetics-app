export interface Dictionary {
    page: {
      title: string;
      desc: string;
    };
    HomeHero: {
      title: string;
      desc: string;
    };
    NavigationMegaMenu: {
      announcement: string;
    };
    ComingSoon: {
      title: string;
      desc: string;
      headingLine1?: string;
      headingLine2?: string;
      headingLine3?: string;
      subheadingLine1?: string;
      subheadingLine2?: string;
      inputEmailPlaceholder?: string;
      inputSubmitButtonText?: string;
      inputSubscribeToNewsLetter?: string;
    };
    MegaMenu?: {
      announcement: string;
    }
  }
  
  export const dictionaries = {
    en: () => import('../app/[lang]/dictionaries/en.json').then((module) => module.default),
    ro: () => import('../app/[lang]/dictionaries/ro.json').then((module) => module.default),
  };
  
  export const getDictionary = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]();
  