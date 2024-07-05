import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preset from "./pages/Preset";
import Home from "./pages/Home/Home";
import Espressos from "./pages/Espressos";
import ComLeite from "./pages/ComLeite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preset />}>
          <Route index element={<Home />} />
          <Route path="/espresso" element={<Espressos />} />
          <Route path="/com-leite" element={<ComLeite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;