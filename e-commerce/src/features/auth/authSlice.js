import {
    createSlice,
} from '@reduxjs/toolkit';


const initialState = {
    value: [],
    status: "idle",
    error : null,
    exists: null
}


const authSlice = createSlice({
    
    name: "user",
    
    initialState,
    reducers: {
        
        signupUser(state, action) {
            
            const {id} = action.payload;
            
            const userExists = state.value.find(user => user.id === id);
            
            if (userExists) {
                return {
                    ...state,
                    error: "user already exists",
                    status: "failed", 
                    exists: true 
                }
            }
            
            return {
                ...state,
                value: [...state.value, action.payload],
                error: false,
                status: "success",
                exists: false
            }
        }
    },
});

export const { signupUser } = authSlice.actions;
export default authSlice.reducer;