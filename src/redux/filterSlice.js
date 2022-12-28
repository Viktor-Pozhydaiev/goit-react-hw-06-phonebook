const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    contactsFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { contactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
