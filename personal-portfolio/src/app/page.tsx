import Hero from "./sections/Hero";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="id">
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
