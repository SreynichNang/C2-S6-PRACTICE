import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [imgIndex, setImgIndex] = React.useState(0);

  /* You will need to hanle the click on left and right button */
  function toLeft() {
    if(imgIndex === 0) {
      setImgIndex(images.lenght -1);
    }
    else {
      setImgIndex(imgIndex - 1);
    }
  }
  function toRight() {
    if (imgIndex === (images.lenght - 1)) {
      setImgIndex(0);
    }
    else {
      setImgIndex(imgIndex + 1);
    }
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={toLeft} className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[imgIndex].src} alt={images[imgIndex].alt} className="slide" />

      <BsArrowRightCircleFill onClick={toRight} className="arrow arrow-right" />
    </div>
  );
};
