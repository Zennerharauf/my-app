//hero.tsx
import Image from "next/image"
import "../style/hero.css";

function Hero() {
    return (
        <div className="container">
            <div className="container-boxes">
                {/*left*/}
                <div className="hero-left-img">
                    <Image src={"/images/me.jpg"}
                        width={200}
                        height={200}
                        alt="profile" />
                </div>
                {/*right*/}
                <div className="hero-right" >
                    <h1 className="title">
                        I'm Zennerha Rauf 
                        Front-end Developer
                    </h1>
                    <p className="description">
                    As an enthusiastic and committed aspiring Front-end Developer. I am driven by a passion for coding and innovation. I am eager to hone my technical skills, embrace challenges, and contribute to dynamic web development projects. With a strong foundation and a desire to learn continuously, I am set on a path to create meaningful and efficient digital solutions</p>
                    <button className="btn">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}
export default Hero