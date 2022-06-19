import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inc, dec, res } from "../redux/redux";

const Counter = () => {
  const dispatch = useDispatch();

  const data = useSelector((val) => val);



  const increment = () => {
    dispatch(inc());
  };
  const decrement = () => {
    dispatch(dec());
  };
  const reset = () => {
    dispatch(res());
  };

  return (
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        inc-
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        res 0
      </button>
      <button
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
