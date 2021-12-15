import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:100,
          strings: ["Scientist", "Engineer", "Analyst"],
        });
      }, []);

    return (
        <div className="intro" id="intro">
            <div style={{ backgroundImage: "url(/assets/bgimg.jpg)" }}></div>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photoSiteDot.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there ! I'm</h2>
                    <h1>Gabriel Foix</h1>
                    <h3>Data <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
