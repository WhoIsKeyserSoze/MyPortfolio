import "./topbar.scss";
import {Mail} from "@material-ui/icons";
import {LinkedIn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">|FxG|</a>
                    <Mail classname="icon" />
                        <span>gabriel.foix@ynov.com</span>
                        <a href="https://www.linkedin.com/in/gabriel-foix-0bb121214"><LinkedIn className="icon" id="iconeLinkedin" fontSize="large" color="inherit" /></a>
                    
                    
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
