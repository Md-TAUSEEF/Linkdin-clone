import { configureStore } from "@reduxjs/toolkit";
import Linkdinreducer from "./Linkdinreducer";


const store = configureStore({
  reducer: Linkdinreducer
});

export default store;
