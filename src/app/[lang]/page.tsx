import { getDictionary } from './dictionaries';
import HomeHero from '../components/HomeHero';
import LongBackgroundImage from '../components/LongImage';

type Props = {
  params: {
    lang: string;
  };
};

export async function generateMetadata(props: Props) {
  const { params } = props;
  const t = await getDictionary(params.lang);

  return {
    title: t.page.title,
    description: t.page.desc,
  };
}

export default async function Home(props: Props) {
  const { params } = await props;
  const t = await getDictionary(params.lang);

  return (
    <div className="@container">
      <div className="relative">
        <HomeHero />
      </div>
    </div>
  );
}