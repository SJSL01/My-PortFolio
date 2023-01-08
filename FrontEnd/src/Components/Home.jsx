import "../Styles/Home.css"
import { TypeAnimation } from 'react-type-animation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
    return (
        <div className="home-container">

            <div className="left">
                <div id="text" style={{ width: "80%" }}>
                    I'm Simran,<br />
                    <TypeAnimation
                        sequence={['A Full Stack Developer', 200,
                            'MERN Stack Developer', 200,
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </div>

                <div className="description">
                    As a MERN stack developer, I have a strong foundation in the technologies
                    that power modern web applications.
                    I am skilled in using MongoDB, Express, React, and Node.js to build scalable,
                    high-performance web applications that deliver an exceptional user experience.
                    I have a passion for developing intuitive and visually appealing interfaces,
                    and I am always looking for ways to push the boundaries of what is possible with web development.
                </div>

                <div className="skills-container">
                    Skilled In
                    <Carousel autoPlay={true}
                        transitionTime={300}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        dynamicHeight={true}
                        width={"100px"}>

                        <img style={{ minWidth: "60px", width: "5vw" }} src="./react.png" alt="" />

                        <img style={{ minWidth: "50px", width: "5vw", borderRadius: "50%" }} 
                        src="./nodejs.png" alt="" />
                        <img style={{ minWidth: "60px", width: "5vw" }} src="./js.png" alt="" />

                        <img style={{ minWidth: "60px", width: "5vw" }} src="./mongo.png" alt="" />

                        <img style={{ minWidth: "60px", width: "5vw" }} src="./html.png" alt="" />

                        <img style={{ minWidth: "60px", width: "5vw" }} src="./bootstrap.png" alt="" />

                        <img style={{ minWidth: "60px", width: "5vw" }} src="./css.png" alt="" />


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
