import Header from "./components/Header";
import Services from "./components/Services";
import Hero from "./components/Hero";
import ActionCall from "./components/ActionCall";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>

      <div><Header /></div>

      <div> <Hero /></div>

      <div><Services /></div>

      <div><ActionCall /></div>

      <div><About /></div>

      <div><Blog /></div>

      <div> <Contact /></div>

      <div><Footer/></div>



    </main>
  );
}
