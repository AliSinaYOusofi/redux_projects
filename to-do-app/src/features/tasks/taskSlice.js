import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status: "empty",
    value : [{}]
}

export const taskSlice = createSlice( {
    
    name: "tasks",
    initialState,

    reducers: {
    }
});


export default taskSlice.reducer;