import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
