import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = {
        ...action.payload,
        card: {
          ...action.payload.card,
          quantity: 1, // Always start with quantity 1
        },
      };
      // ✅ Always push a new entry, even if it's a duplicate
      state.items.push(newItem);
    },

    removeItems: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      const indexToRemove = state.items.findIndex(
        (item) => item.card.info.id === itemIdToRemove
      );
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
      console.log("Removing item:", itemIdToRemove);
    },
    clearCart: (state) => {
      //to display it in console
      //console.log(current(state)) - current needs to be imported from reduxtoolkit

      //RTK needs to be either mutate the state or return a new state
      state.items.length = 0;
      //return {items:[]} - originalState=[]
      //this new array will be replaced inside original state
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
