import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { qush,ayir,nol} from "../redux/redux";

const Counter = () => {
  const dispatch = useDispatch();

  const data = useSelector((val) => val);



  const increment = () => {
    dispatch(ayir());
  };
  const decrement = () => {
    dispatch(qush());
  };
  const reset = () => {
    dispatch(nol());
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
