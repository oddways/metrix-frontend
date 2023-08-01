import { configureStore } from "@reduxjs/toolkit"
import DashboardReducer from "./slices/DashboardSlice"

const Store = configureStore({
  reducer: {
    dashboardStore: DashboardReducer,
  },
})

export default Store
