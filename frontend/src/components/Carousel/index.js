import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"
import slider4 from "../../assets/slider4.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight className="arrow-icon"/>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft className="arrow-icon"/>
    </div>
  )
}

const Carousel = props => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={slider1} className="image" alt="1" />
        </div>
        <div className="slide">
          <img src={slider2} className="image" alt="2" />
        </div>
        <div className="slide">
          <img src={slider3} className="image" alt="3" />
        </div>
        <div className="slide">
          <img src={slider4} className="image" alt="4" />
        </div>
      </Slider>

      <div className="fixed-text">
        <h1 className="fixed-heading">Celebrate Every Occasion with Mehendi Designs</h1>
        <p className="fixed-paragraph">I am just here for Mehandi</p>
        <button className="fixed-button">Contact Us</button>
      </div>
    </div>
  )
}

export default Carousel
