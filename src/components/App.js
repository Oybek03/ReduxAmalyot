import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./Counter";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import { CounterConnect } from "../redux/connect/CounterConnect";

const App = () => {
  return (
    <div>
      <Header />
      <CounterConnect />
    </div>
  );
};
export default App;
