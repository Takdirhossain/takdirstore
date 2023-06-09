import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import "./slider.scss"
const Slide = () => {
    const [currentslide, setCurrentslide] = useState(0)

    const preslide = () => {
        setCurrentslide(currentslide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextslide = () => {
        setCurrentslide(currentslide === 2 ? 0 : (prev) => prev + 1)
    }
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentslide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={preslide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextslide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slide;
