import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";
import imageFile3 from "../../Images/Spring-2020-1.jpeg";
import imageFile4 from "../../Images/Spring-2020-2.jpeg";
import imageFile5 from "../../Images/Trending-Now-1.jpeg";
import imageFile6 from "../../Images/Trending-Now-2.jpeg";
import imageFile7 from "../../Images/Classics-1.jpeg";
import imageFile8 from "../../Images/Classics-2.jpeg";

import React from "react";
import ReactDOM from "react-dom";
import "./Slider.css";

const slides = {
  properties: [
    {
      title: "Fall 2020 Collection",
      imga: imageFile1,
      imgb: imageFile2,
      labela: "LUCA",
      labelb: "VIDA",
      index: 0
    },
    {
      title: "Spring 2020 Collection",
      imga: imageFile3,
      imgb: imageFile4,
      labela: "AlWAYS",
      labelb: "BELIZE",
      index: 1
    },
    {
      title: "Trending Now",
      imga: imageFile5,
      imgb: imageFile6,
      labela: "ALICE",
      labelb: "EVELYN",
      index: 2
    },
    {
      title: "Classics",
      imga: imageFile7,
      imgb: imageFile8,
      labela: "AINSLEY",
      labelb: "ANNIE",
      index: 3
    }
  ]
};

const Slide = ({ property }) => {
  const { title, imga, imgb, labela, labelb, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <p className="title slide-text">{`${title}`}</p>
      <div className="slide-container">
        <div className="image-1">
          <img src={imga} className="slide-img"/>
          <p className="slide-text">{`${labela}`}</p>
        </div>
        <div className="image-2">
          <img src={imgb} className="slide-img"/>
          <p className="slide-text">{`${labelb}`}</p>
        </div>
      </div>
    </div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: slides.properties,
      property: slides.properties[0]
    };
  }


  prevProperty = () => {
      if (this.state.property.index >= 0) {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: slides.properties[newIndex]
    })} else {
    const newIndex = 3;
    this.setState({
      property: slides.properties[newIndex]
    })}
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: slides.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <div className="card">
        <button
            className="button"
            onClick={() => this.prevProperty()}
            disabled={property.index === slides.properties.length - 1}
          >
            &#10094;
          </button>
          <div className="slide">
            <Slide property={property} />
          </div>
          <button
            className="button"
            onClick={() => this.nextProperty()}
            disabled={property.index === slides.properties.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
