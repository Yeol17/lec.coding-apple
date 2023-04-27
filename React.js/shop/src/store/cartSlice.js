import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    changeCnt(state, action) {
      let res = state.find((el) => el.id === action.payload)
      res.count += 1
    },
    addCart(state, action) {
      let post = action.payload;
      let res = state.find(el => el.id === post.id);

      if (res) {
        res.count += 1
      } else {
        state.push({ id: post.id, name: post.name, count: 1 })
      }
    }
  }
})

export let { changeCnt, addCart } = cart.actions
export default cart