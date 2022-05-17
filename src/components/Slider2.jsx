import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Slider2 = () => {
  const [product, setProduct] = useState([]);
  const getProductList = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a5531f013824e2e60d416bd5e88fade9"
    )
      .then((b) => b.json())
      .then((b) => setProduct(b));
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <Swiper spaceBetween={30}  slidesPerView={3}>
        {product.results?.map((a) => (
          <SwiperSlide key={a.id}>
              <img style={{width:"100%"}} src={`https://image.tmdb.org/t/p/original${a.backdrop_path}`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2;
