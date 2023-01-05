import "../Styles/Home.css"
import { TypeAnimation } from 'react-type-animation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
    return (
        <div className="home-container">

            <div className="left">
                <div style={{ width: "60%" }}>
                    I'm Simran,<br />
                    <TypeAnimation
                        sequence={['A Full Stack Developer', 200,
                            'MERN Satck Developer', 200,
                        ]}
                        wrapper="h1"
                        repeat={Infinity}
                    />
                </div>
                <div className="skills-container">
                    Skilled In
                    <Carousel autoPlay={true}
                        transitionTime={500}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        width={"200px"}>

                        <img style={{ width: "100px" }} src="./react.png" alt="" />

                        <img style={{ width: "100px" }} src="./js.png" alt="" />


                        <img style={{ width: "100px" }} src="./js.png" alt="" />


                        <img style={{ width: "100px" }} src="./js.png" alt="" />


                        <img style={{ width: "100px" }} src="./js.png" alt="" />

                    </Carousel>
                </div>
            </div>

            <div className="right">
                <div className="avatar">
                    <img src={"./avatar.jpg"} alt="ME" />
                </div>
            </div>
        </div>
    )
}
