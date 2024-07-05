import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Menwears from "./Menwears";
import Women from "./Women";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="men" element={<Menwears />} />
        <Route path="women" element={<Women />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
