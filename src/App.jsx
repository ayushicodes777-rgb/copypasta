import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Track from "./pages/Track";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/track" element={<Track />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;