import {
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';


const signupAdapter = createEntityAdapter({
    selectId: (entity) => entity.username
});

const initialState = signupAdapter.getInitialState({
    value: [],
    status: "idle",
    error : null,
});


const loginSlice = createSlice({
    
    name: "user",
    
    initialState,
    
    reducers: {
        signupUser(state, action) {
            state.status = "saved";
            signupAdapter.upsertMany(state, [action.payload]);
        }
    },
});

export const {signupUser} = loginSlice.actions;
export const {selectById: getCurrentId} = signupAdapter.getSelectors(state => state.user);

export default loginSlice.reducer;