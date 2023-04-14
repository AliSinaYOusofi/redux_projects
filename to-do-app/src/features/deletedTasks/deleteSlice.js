import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "empty",
    value: []
}

export const deleteSlice = createSlice({
    name: "deleted",
    initialState,

    reducers: {
        addToDelete(state, action) {
            state.value.push(action.payload)
        }
    }
});


export const {addToDelete} = deleteSlice.actions;

export default deleteSlice.reducer;