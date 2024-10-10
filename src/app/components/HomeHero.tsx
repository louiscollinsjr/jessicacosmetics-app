import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function HomeHero() {
  return (
    <section className="@container bg-black">
      <div className="relative z-10 mx-auto min-mx-auto @container @sm:max-w-[980px] h-[2160px] pt-48">
      <main
        id="main-content"
      >
        <div className="mx-auto px-4 py-8">
          <h1
            className={`text-8xl font-normal mb-4 text-white ${playfairDisplay.className}`}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
              }}
            >
              <span>Frumoasă,</span>
              <span>Naturală,</span>
              <span>Tu.</span>
            </div>
          </h1>
        </div>
      </main>
      </div>
    </section>
  );
}
