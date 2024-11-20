import {
  Navbar,
  Hero,
  Highlights,
  Model,
  Features,
  Chip,
  Footer,
} from "./components";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  );
}

export default App;
