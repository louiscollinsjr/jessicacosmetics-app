import HomeHero from '../components/HomeHero';
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
    <div className="@container min-h-screen">
      <div className="relative min-h-[100dvh] flex flex-col">
        <HomeHero dictionary={dictionary} />
      </div>
    </div>
  );
}