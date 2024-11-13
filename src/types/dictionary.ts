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
      jessicaColorsMenu: string;
      nailTreatmentsMenu: string;
      zenSpaPedicureMenu: string;
      accessoriesMenu:string;
      jessicaColorsDesc: string;
      nailTreatmentsDesc: string;
      zenSpaPedicureDesc: string;
      accessoriesDesc:string;
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
      successMessage: string;
      successFailureMessage: string;
      
    };
    MegaMenu?: {
      announcement: string;
      jessicaColorsMenu: string;
      nailTreatmentsMenu: string;
      zenSpaPedicureMenu: string;
      accessoriesMenu:string;
      jessicaColorsDesc: string;
      nailTreatmentsDesc: string;
      zenSpaPedicureDesc: string;
      accessoriesDesc:string;
    };
    Footer?: {
      title?: string;
      desc?: string;
      copyright?: string;
      socialMedia?: {
        facebook?: string;
        instagram?: string;
        x?: string;
      };
    }
    
  }
  
  export const dictionaries = {
    en: () => import('../app/[lang]/dictionaries/en.json').then((module) => module.default),
    ro: () => import('../app/[lang]/dictionaries/ro.json').then((module) => module.default),
  };
  
  export const getDictionary = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]();
  