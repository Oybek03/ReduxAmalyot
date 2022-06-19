import { connect } from "react-redux";
import Counter from "../../components/Counter";
import { qush, ayir, nol } from "../redux";
const getMyState = (state) => {
  return state;
};

export const CounterConnect = connect(getMyState, { qush, ayir, nol })(Counter);
