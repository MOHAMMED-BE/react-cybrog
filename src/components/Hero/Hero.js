import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subtitle">Welcome To Cybrog</h6>
                <h4 className="hero-title"><em>Browse</em> Oue Popular Games</h4>
                <div className="main-button">
                    <a className="btn btn-dark" href="browse.html">Browse Now</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
