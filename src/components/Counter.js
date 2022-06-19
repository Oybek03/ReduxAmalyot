import React, { useEffect, useState } from "react";
import { qush, ayir, nol } from "../redux/redux";

const Counter = (props) => {
  console.log(props.count);

  const increment = () => {
    props.ayir(1);
  };
  const decrement = () => {};
  const reset = () => {};

  return (
    <div>
      <h1>0</h1>
      <button
        className="btn btn-info"
        onClick={() => {
          increment();
        }}
      >
        inc-
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          reset();
        }}
      >
        res 0
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          decrement();
        }}
      >
        dec+
      </button>
    </div>
  );
};

export default Counter;
