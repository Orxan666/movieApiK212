// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// const HeroSlider = () => {
//   const [products, setProducts] = useState([]);
//   const getproductList = () => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=a5531f013824e2e60d416bd5e88fade9"
//     )
//       .then((c) => c.json())
//       .then((c) => setProducts(c));
//   };
//   useEffect(() => {
//     getproductList();
//   }, []);

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {products.results?.map((p) => (
//         <SwiperSlide key={p.id}>
//           <img
//           style={{width:"100%"}}
//             className="img-fluid"
//             src={`https://image.tmdb.org/t/p/original/${p.backdrop_path}`}
//             alt=""
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroSlider;
