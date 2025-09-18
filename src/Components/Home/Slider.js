import React, { useState } from "react";
import "./Slider.css";

const slides = [
    {
        image: "https://imageio.forbes.com/specials-images/imageserve/65e9ae6e1a6dec749d2ba9de/Open-Concept-Office--Where-a-Work-Meeting-is-Being-Held/960x0.jpg?format=jpg&width=960",
        title: "Data Engine: Precision insights at scale",
        text: "Vividnex’s marketers can focus on more creative, strategic work with AI agents, enabled by a strong digital core that supports agentic architecture.",
        link: "#"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukfIB9TiPPm7aRUS7Vgv4URWw_GS_Q0CjP_V85CbpzaaXraq1_UjVrULmcZHKUZmYh2Q&usqp=CAU",
        title: "Vividnex redefines the future of digital innovation",
        text: "Empower your enterprise with cloud-native apps and intelligent automation for agility and innovation.",
        link: "#"
    },
    {
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnc9g16_pvXuSqHtsPbEjPu0J7nIviuNIme_UYSTGHgpMWsvKO",
        title: "Sustainable Technology",
        text: "Create long-term impact with technologies designed to reduce your environmental footprint.",
        link: "#"
    },
    {
        image: "https://media.licdn.com/dms/image/sync/v2/D4E27AQGhJvGxukVgZg/articleshare-shrink_800/B4EZb8mA9nHYAI-/0/1747994546487?e=2147483647&v=beta&t=xoqDfDzQwVTBRCMxC4fX0nl4M66NwnPUexzbRHi8mS4",
        title: "Human + Machine Collaboration",
        text: "Boost productivity and decision-making through seamless synergy between humans and AI systems.",
        link: "#"
    },
    {
        image: "https://media.istockphoto.com/id/520287106/photo/resting-and-enjoy-the-sunset.jpg?s=612x612&w=0&k=20&c=tbj4yyMcs_28PTcWQ25VpCTXNsKdYdo6jVO0tZQZG2c=",
        title: "Cyber Resilience",
        text: "Protect business-critical assets with intelligent cybersecurity frameworks that evolve with threats.",
        link: "#"
    },
    {
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_iDLgh6xf1WfYpsw1pXmzEB1WjFtrfh853dXbSsgraAwmOMMS",
        title: "Next-gen Customer Experience",
        text: "Redefine customer journeys through hyper-personalized, omnichannel digital experiences.",
        link: "#"
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Paused by default

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const togglePlay = () => setIsPlaying((prev) => !prev);

    const { image, title, text, link } = slides[currentIndex];

    return (
        <div className="slider-container">
            <div className="slider-left">
                <img src={image} alt="Slide" />
            </div>
            <div className="slider-right">
                <h2>{title}</h2>
                <p>{text}</p>
                
                <div className="controls">
                    <button onClick={togglePlay}>{isPlaying ? "❚❚" : "▶"}</button>
                    <div className="pagination">
                        <button onClick={prevSlide}>←</button>
                        <span>{currentIndex + 1}/{slides.length}</span>
                        <button onClick={nextSlide}>→</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
