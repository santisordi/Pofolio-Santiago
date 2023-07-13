import About from "./components/About";
import Experience from "./components/Experience";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Links from "./components/Links";
import "./firebase";



function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Links />        
        <SocialLinks />
    </div>
  );
}

export default App;
