import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export default function HomeHero() {
  return (
    <section className="@container container mx-auto lg:max-w-screen-lg relative h-screen">
      <div className="absolute bottom-0 right-0 p-8 z-10">
        <h1
          className={`text-8xl font-normal mb-4 text-white ${playfairDisplay.className}`}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'right',
            }}
          >
            <span>Frumoasă,</span>
            <span>Naturală,</span>
            <span>Tu.</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
