import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const getIpDetails = createAsyncThunk("ip/getIpDetails", async (ip) => {
    const response = await fetch(`https://ipapi.co/${ip}/json`);
    return response.json();
});

const initialState = {
    value: [],
    status: "idle",
    error: null
}

export const ipSlice = createSlice( {
    name: "ip",
    initialState,

    reducers: {

        deleteIpData(state, action) {
            const {id} = action.payload;
            console.log(id, 'reducer');
            const currentIpData = state.value.filter(ip => ip.id !== id);
            return {
                ...state,
                value: currentIpData
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getIpDetails.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getIpDetails.fulfilled, (state, action) => {
            state.status = 'success';
            const newIpData = {
                ...action.payload,
                id : uuidv4()
            }
            state.value.unshift(newIpData);
        })
        .addCase(getIpDetails.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message + " " + action.error.code
        })

    }
});

export const {deleteIpData} = ipSlice.actions;

export default ipSlice.reducer;