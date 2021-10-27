import "./topbar.scss";
import {LinkedIn} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">|FxG|</a>
                    
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/gabriel-foix-0bb121214"><LinkedIn className="icon" id="iconeLinkedin" fontSize="large" color="inherit" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
