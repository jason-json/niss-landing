import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="carrousel_section">
      <div className="carrousel_section_wrap">
        <Slider {...settings}>
          {props.images.map((image, index) => {
            if (image.name !== "") {
              return (
                <div >
                    <img
                      src={require(`../../lib/img/cars/${image.name}`)}
                      alt={image.alt}
                      style={{width:'70%'}}
                    />
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Carrousel;
