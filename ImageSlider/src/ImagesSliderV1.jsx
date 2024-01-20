import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImagesSliderV1 = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(2);
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };
  return (
    <div className="imageSlider">
      <img src={images[imageIndex]} alt="image" className="image" />
      <button
        className="btn"
        style={{ left: 0, borderRadius: " 15px 0 0 15px" }}
        onClick={showNextImage}
      >
        <FaArrowLeft />
      </button>
      <button
        className="btn"
        style={{ right: 0, borderRadius: " 0 15px 15px 0" }}
        onClick={showPrevImage}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImagesSliderV1;
