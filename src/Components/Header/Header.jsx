import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledSliderDots = styled("ul")({
  "& li button:before": {
    width: "22px",
    height: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.3) !important",
    content: "''",
  },
});

const Header = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <Box height="100%">
      <Slider
        {...settings}
        dotsClass="slick-dots"
        appendDots={(dots) => <StyledSliderDots>{dots}</StyledSliderDots>}
      >
        <Box>
          <img
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
            alt="placeholder"
            style={{ width: "100%", height: "70%" }}
          />
        </Box>
        <Box>
          <img
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
            alt="placeholder"
            style={{ width: "100%", height: "70%" }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default Header;
