import "./topbar.scss";
import {Mail} from "@material-ui/icons";
import {LinkedIn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="assets/logo.png" alt="a" /></a>
                    <Mail classname="icon" id="iconemail"/>
                        <span id="email">gabriel.foix@ynov.com</span>
                        <a href="https://www.linkedin.com/in/gabriel-foix-0bb121214" target="_blank"><LinkedIn className="icon" id="iconeLinkedin" fontSize="large" color="inherit" /></a>
                    
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
