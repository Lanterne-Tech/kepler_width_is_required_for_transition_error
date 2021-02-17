import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import keplerGlReducer from "kepler.gl/reducers";
import { enhanceReduxMiddleware } from "kepler.gl/middleware";

export default configureStore({
  reducer: {
    keplerGl: keplerGlReducer,
  },
  middleware: enhanceReduxMiddleware(
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
  ),
});
