import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div style={{ backgroundImage: "url(/assets/bgimg.jpg)" }}></div>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/backgroundIMG.png" alt="a" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>#TODO</h1>
                    <h2>Projets persos</h2>
                    <h1>#TODO</h1>
                    <h2>Projets Ynov</h2>
                </div>
            </div>
            
        </div>
    )
}
