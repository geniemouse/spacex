import React from "react";

import "./HeroImage.css";

import defaultImg from "../../assets/img/launch-home.png";
import hdx2Img from "../../assets/img/launch-home@2x.png";
import hdx3Img from "../../assets/img/launch-home@3x.png";

function HeroImage(props) {
    const srcset = `${defaultImg}, ${hdx2Img} 2x, ${hdx3Img} 3x`;

    return (
        <section className="image-decoration">
            {/*
                - Design & dev-wise, this image could be rectanglular and
                    utilize either mask or clip-path CSS
                - @improvement: make an UI/Image component more re-usable by
                    accepting image sources as props, etc
            */}
            <img srcSet={srcset} src={defaultImg} alt="" />
        </section>
    );
}

export default HeroImage;
