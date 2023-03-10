import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Tokemonics from "./components/Tokemonics";
import Backtotop from "./components/Backtotop";
import Loading from "./components/Loading";
import Rarity from "./components/Rarity";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  const [preload, setpreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 2800);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {preload && <Loading />}
        <Header />
        <Tokemonics />
        <Backtotop />
        <Rarity />
        <Roadmap />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
