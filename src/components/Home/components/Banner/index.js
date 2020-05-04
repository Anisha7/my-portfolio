import React, { Component } from "react";
import "./styles.css";
import image from "../../../../images/banner.svg";
import TypedText from "./components/TypedText";

class Banner extends Component {
  render() {
    return (
      <div className="banner content-margin">
        <div className="slogan">
          <h1>
            I am a{" "}
            <span className="highlight">
              <TypedText
                strings={[
                  "passionate",
                  "creative",
                  "collaborative",
                ]}
              />
            </span>
          </h1>
          <h1>frontend engineer.</h1>
        </div>
        <img src={image} alt="Illustration of creative work space" />
      </div>
    );
  }
}

export default Banner;
