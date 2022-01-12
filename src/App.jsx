import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Background from "./components/background/Background";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Background/>
        <Portfolio/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
