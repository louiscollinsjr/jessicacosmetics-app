import HomeHero from '../components/HomeHero';
import LongBackgroundImage from '../components/LongImage';

import { getDictionary } from '@/types/dictionary';

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { lang } = await params;  // Await `params` before accessing `lang`
  const dictionary = await getDictionary(lang);
  
  return {
    title: dictionary.page.title,
    description: dictionary.page.desc,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params;  // Await `params` before accessing `lang`
  const dictionary = await getDictionary(lang);

  return (
    <div className="@container">
      <div className="relative">
        <HomeHero dictionary={dictionary} />
      </div>
    </div>
  );
}