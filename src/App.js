import "./App.css";
import BuyBlock from "./Components/BuyBlock";
import Hero from "./Components/Hero";
import LandingPages from "./Components/LandingPages";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Blocks from "./Components/blocks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LandingPages />
      <Blocks />
      <BuyBlock />
      <Newsletter />
    </div>
  );
}

export default App;
