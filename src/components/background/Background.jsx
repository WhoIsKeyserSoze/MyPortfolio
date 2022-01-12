import "./background.scss"

export default function Background() {
    return (
        <div className="background" id="background">
            <div style={{ backgroundImage: "url(/assets/bgimg.jpg)" }}></div>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/backgroundIMG.png" alt="a" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Studies</h1>
                    <h2>Licence Informatique - Université Paul Sabatier</h2>
                    <h3>Toulouse</h3>
                    <h2>Master Informatique [ Data ] - Ynov</h2>
                    <h3>Bordeaux</h3>
                    <h1>Work</h1>
                    <h2>I currently work for a major IT company in the field of artificial intelligence in Bordeaux - France</h2>
                </div>
            </div>
        </div>

    )
}
