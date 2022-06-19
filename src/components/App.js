import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./Counter";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
