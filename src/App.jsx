import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Menwears from "./pages/Menwears";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import NewArrival from "./pages/NewArrival";
import Carousel from "./components/Carousel";

const clothes = [
  {
    name: "Nike Premium plain white",
    price: 88000,
    discountedPrice: 80000,
    img: "/img/men/white-shirt.png",
    size: "M",
    category: "Men",
    brand: "Nike",
  },
  {
    name: "Nike turquoise plain shirt",
    price: 80000,
    discountedPrice: 88000,
    img: "/img/women/turquoise-shirt.png",
    size: "M",
    category: "Women",
    brand: "Nike",
  },
  {
    name: "Lacoste gold yellow shirt",
    price: 70000,
    discountedPrice: 65000,
    img: "/img/men/yellow-shirt.png",
    size: "M",
    category: "Men",
    brand: "Lacoste",
  },
  {
    name: "Lacoste hot red shirts",
    price: 65000,
    discountedPrice: 70000,
    img: "/img/women/red-shirt.png",
    size: "M",
    category: "Women",
    brand: "Lacoste",
  },
  {
    name: "Adidas black plain shirt",
    price: 65000,
    discountedPrice: 55000,
    img: "/img/men/black-shirt.png",
    size: "M",
    category: "Men",
    brand: "Adidas",
  },
  {
    name: "Adidas pink plain shirts",
    price: 55000,
    discountedPrice: 60000,
    img: "/img/women/pink-shirt.png",
    size: "M",
    category: "Women",
    brand: "Adidas",
  },
  {
    name: "Gucci purple plain shirt",
    price: 58000,
    discountedPrice: 68000,
    img: "/img/men/purple-shirt.png",
    size: "M",
    category: "Men",
    brand: "Gucci",
  },
  {
    name: "Zara white plain shirt",
    price: 58000,
    discountedPrice: 60000,
    img: "/img/women/white-shirt.png",
    size: "M",
    category: "Women",
    brand: "Zara",
  },
  {
    name: "Gucci red plain shirt",
    price: 60000,
    discountedPrice: 55000,
    img: "/img/men/red-shirt.png",
    size: "M",
    category: "Men",
    brand: "Gucci",
  },
  {
    name: "Zara black plain shirt",
    price: 55000,
    discountedPrice: 60000,
    img: "/img/women/black-shirt.png",
    size: "M",
    category: "Women",
    brand: "Zara",
  },
  {
    name: "Nike black plain shirts",
    price: 78000,
    discountedPrice: 58000,
    img: "/img/men/black-shirt.png",
    size: "M",
    category: "Men",
    brand: "Nike",
  },
  {
    name: "Nike pink plain shirts",
    price: 58000,
    discountedPrice: 60000,
    img: "/img/women/pink-shirt.png",
    size: "M",
    category: "Women",
    brand: "Nike",
  },
  {
    name: "Lacoste white plain shirt",
    price: 65000,
    discountedPrice: 52000,
    img: "/img/men/white-shirt.png",
    size: "M",
    category: "Men",
    brand: "Lacoste",
  },
  {
    name: "Lacoste turquoise plain shirt",
    price: 52000,
    discountedPrice: 66000,
    img: "/img/women/turquoise-shirt.png",
    size: "M",
    category: "Women",
    brand: "Adidas",
  },
  {
    name: "Adidas black plain shirt",
    price: 50000,
    discountedPrice: 45000,
    img: "/img/men/black-shirt.png",
    size: "M",
    category: "Men",
    brand: "Adidas",
  },
  {
    name: "Adidas black plain shirts",
    price: 45000,
    discountedPrice: 60000,
    img: "/img/women/black-shirt.png",
    size: "M",
    category: "Women",
    brand: "Adidas",
  },
  {
    name: "Reebok green plain shirt",
    price: 78000,
    discountedPrice: 58000,
    img: "/img/men/green-shirt.png",
    size: "M",
    category: "Men",
    brand: "Reebok",
  },
  {
    name: "Reebok white plain shirt",
    price: 58000,
    discountedPrice: 78000,
    img: "/img/women/white-shirt.png",
    size: "M",
    category: "Women",
    brand: "Reebok",
  },
  {
    name: "Gucci gold yellow shirt",
    price: 40000,
    discountedPrice: 35000,
    img: "/img/men/yellow-shirt.png",
    size: "M",
    category: "Men",
    brand: "Gucci",
  },
  {
    name: "Gucci angel white shirt",
    price: 25000,
    discountedPrice: 30000,
    img: "/img/women/white-shirt.png",
    size: "M",
    category: "Women",
    brand: "Gucci",
  },
  {
    name: "Adidas red plain shirt",
    price: 80000,
    discountedPrice: 75000,
    img: "/img/men/red-shirt.png",
    size: "M",
    category: "Men",
    brand: "Adidas",
  },
  {
    name: "Adidas hot red plain shirts",
    price: 75000,
    discountedPrice: 80000,
    img: "/img/women/red-shirt.png",
    size: "M",
    category: "Women",
    brand: "Adidas",
  },
  {
    name: "Reebok white plain shirt",
    price: 35000,
    discountedPrice: 28000,
    img: "/img/men/white-shirt.png",
    size: "M",
    category: "Men",
    brand: "Reebok",
  },
  {
    name: "Reebok pink plain shirt",
    price: 28000,
    discountedPrice: 35000,
    img: "/img/women/pink-shirt.png",
    size: "M",
    category: "Women",
    brand: "Reebok",
  },
  {
    name: "Gucci black plain shirt",
    price: 30000,
    discountedPrice: 25000,
    img: "/img/men/black-shirt.png",
    size: "M",
    category: "Men",
    brand: "Gucci",
  },
  {
    name: "Gucci black plain shirt",
    price: 25000,
    discountedPrice: 30000,
    img: "/img/women/black-shirt.png",
    size: "M",
    category: "Women",
    brand: "Gucci",
  },
  {
    name: "Nike white plain shirt",
    price: 28000,
    discountedPrice: 20000,
    img: "/img/men/white-shirt.png",
    size: "M",
    category: "Men",
    brand: "Nike",
  },
  {
    name: "Nike pink plain shirts",
    price: 20000,
    discountedPrice: 70000,
    img: "/img/women/pink-shirt.png",
    size: "M",
    category: "Women",
    brand: "Nike",
  },
  {
    name: "Lacoste faded blue shirt",
    price: 50000,
    discountedPrice: 45000,
    img: "/img/men/blue-shirt.png",
    size: "M",
    category: "Men",
    brand: "Lacoste",
  },
  {
    name: "Lacoste black plain shirt",
    price: 45000,
    discountedPrice: 50000,
    img: "/img/women/black-shirt.png",
    size: "M",
    category: "Women",
    brand: "Lacoste",
  },
  {
    name: "3-in-1 Lacoste plain shirts",
    price: 90000,
    discountedPrice: 85000,
    img: "/img/men/3-in-1.png",
    size: "M",
    category: "Men",
    brand: "Lacoste",
  },
  {
    name: "Zara white plain shirt",
    price: 85000,
    discountedPrice: 90000,
    img: "/img/women/white-shirt.png",
    size: "M",
    category: "Women",
    brand: "Zara",
  },
  {
    name: "Lacoste purple shirt",
    price: 30000,
    discountedPrice: 25000,
    img: "/img/men/purple-shirt.png",
    size: "M",
    category: "Men",
    brand: "Lacoste",
  },
  {
    name: "Nike turquoise plain shirt",
    price: 80000,
    discountedPrice: 88000,
    img: "/img/women/turquoise-shirt.png",
    size: "M",
    category: "Women",
    brand: "Nike",
  },
  {
    name: "3in1 Gucci plain shirts",
    price: 78000,
    discountedPrice: 58000,
    img: "/img/men/3-in-1.png",
    size: "M",
    category: "Men",
    brand: "Gucci",
  },
  {
    name: "Lacoste black plain shirt",
    price: 65000,
    discountedPrice: 70000,
    img: "/img/women/black-shirt.png",
    size: "M",
    category: "Women",
    brand: "Lacoste",
  },
  {
    name: "Adidas black plain shirt",
    price: 30000,
    discountedPrice: 25000,
    img: "/img/men/black-shirt.png",
    size: "M",
    category: "Men",
    brand: "Adidas",
  },
  {
    name: "Reebok pink plain shirt",
    price: 55000,
    discountedPrice: 60000,
    img: "/img/women/pink-shirt.png",
    size: "M",
    category: "Women",
    brand: "Reebok",
  },
  {
    name: "Zara red plain shirt",
    price: 55000,
    discountedPrice: 45000,
    img: "/img/men/red-shirt.png",
    size: "M",
    category: "Men",
    brand: "Adidas",
  },
  {
    name: "Gucci white plain shirt",
    price: 58000,
    discountedPrice: 60000,
    img: "/img/women/white-shirt.png",
    size: "M",
    category: "Women",
    brand: "Gucci",
  },
];

function App() {
  const [clothesData] = useState(clothes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage isLoading={isLoading} />} />
        <Route path="men" element={<Menwears clothesData={clothesData} />} />
        <Route
          path="new-arrival"
          element={<NewArrival clothesData={clothesData} />}
        />
        <Route path="women" element={<Women clothesData={clothesData} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="caro" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
