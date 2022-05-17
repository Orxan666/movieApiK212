// import logo from "./logo.svg";
// import { useEffect, useState } from "react";
import "./App.css";
// import HeroSlider from "./components/heroSlide/HeroSlider";
import Slider2 from "./components/Slider2";

function App() {
  // const [products, setProducts] = useState([]);
  // const getproductList = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=a5531f013824e2e60d416bd5e88fade9"
  //   )
  //     .then((c) => c.json())
  //     .then((c) => setProducts(c));
  // };
  // useEffect(() => {
  //   getproductList();
  // }, []);

  // // getproductList();
  // console.log(products);

  return(
<>
{/* {
products.results?0.map((pro) => <p>{pro.original_title}</p>)


} */}
{/* <HeroSlider/> */}

<Slider2/>



</>
  )
}

export default App;
