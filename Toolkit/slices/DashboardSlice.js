import { createSlice } from "@reduxjs/toolkit"
import {
  Orders,
  Products,
  Sales,
  cartOverView,
  Customers,
  AbandonedCart,
} from "@/Data/data"
const initialState = {
  Orders,
  Products,
  Sales,
  cartOverView,
  Customers,
  AbandonedCart,
}

const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    addWays: (store, action) => {
      store.ways = 10
    },
  },
})

export const { addWays } = DashboardSlice.actions
export default DashboardSlice.reducer
