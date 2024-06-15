import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assests/Machine.jpg"
import slider2 from  "../assests/banner.jpg"
// import components
import SuggestedFruits from "../components/SuggestedFruits";
import AllProducts from "../components/AllProducts";
import About from "./About";
import Contact from "./Contact";

function Home() {
  const productData = useSelector((state) => state.products.productList);

  const fruitsProducts = productData.filter(
    (item) => item.category === "fruits"
  );

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full p-4 sm:p-8" id="home">
      <div className="h-full mx-auto text-center flex flex-col gap-y-8">
        <h1 className="text-5xl font-bold  sm:max-w-[500px] lg:max-w-[900px] mx-auto">
          A One Stop for{" "}
          <span className="text-red-600">Grinding and Milling </span>
        </h1>

        <p className="w-full text-sm sm:max-w-lg text-slate-600 tracking-wider mx-auto">
          "Welcome to <b>Flour and Spices Mill</b>, where precision meets
          convenience! Elevate your milling experience with our
          state-of-the-art slot booking system. Say goodbye to waiting times
          and embrace efficiency as you take control of your schedule.
          Book your slot today and experience the future of milling at{" "}
          <b>Flour and Spices Mill</b> where every reservation is a step towards
          precision, efficiency, and excellence."
        </p>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md w-3/4 sm:max-w-[350px] mx-auto"
        >
          Order Now
        </button>
      </div>

      {/* Carousel for image sliders */}
      <div className="mt-8 w-full">
        <Slider {...carouselSettings}>
          <div>
            <img
              src={slider1}
              alt="Slider 1"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src={slider2}
              alt="Slider 2"
              className="w-half h-auto"
            />
          </div>
          {/* Add more slider items as needed */}
        </Slider>
      </div>

      {/* suggest fruits item in the first  */}
      <div className="mt-32 w-full">
        <SuggestedFruits fruitsProducts={fruitsProducts} />
      </div>

      {/* display all products */}
      <AllProducts heading={"Your Products"} />

      <About />
      <Contact />
    </div>
  );
}

export default Home;
