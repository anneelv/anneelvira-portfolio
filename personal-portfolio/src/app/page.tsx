import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="id">
        <Resume />
        <Portfolio />
      </main>
    </>
  );
}
