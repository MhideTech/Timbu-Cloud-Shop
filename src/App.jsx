import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Menwears from "./pages/Menwears";
import Women from "./pages/Women";
import Cart from "./pages/Cart";
import NewArrival from "./pages/NewArrival";

const url = `http://localhost:8000`;

function App() {
  const [clothesData, setClothesData] = useState([])

  useEffect(function(){
    async function getClothes() {
      try{
        const res = await fetch(`${url}/clothes`);
        const data = await res.json()
        setClothesData(data)
      }catch(e){
        console.log(e)
      }
    }
    getClothes()
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="men" element={<Menwears clothesData={clothesData} />} />
        <Route path="new-arrival" element={<NewArrival />} />
        <Route path="women" element={<Women />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
