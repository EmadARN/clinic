import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signinReducer from "./signin/authSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import adminDashboardReducer from "./adminDashboard/adminDashboardSlice";
import receptionDashboardReducer from "./receptionDashboard/receptionDashboardSlice";
import customerDashboardReducer from "./customerDashboard/customerDashboardSlice";
import stepSlice from "./steper/stepSlice";

const combinedReducer = combineReducers({
  signin: signinReducer,
  adminDashboard: adminDashboardReducer,
  receptionDashboardSlice: receptionDashboardReducer,
  customerDashboard: customerDashboardReducer,
  steper: stepSlice,
});
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const store = () =>
  configureStore({
    reducer: masterReducer,
  });
export const wrapper = createWrapper(store, {
  debug: process.env.NODE_ENV !== "production",
});
