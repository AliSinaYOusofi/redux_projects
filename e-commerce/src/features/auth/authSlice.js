import {
    createSlice,
} from '@reduxjs/toolkit';


const initialState = {
    value: [],
    status: "idle",
    error : null,
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
                    status: "success",  
                }
            }
            
            return {
                ...state,
                value: [...state.value, action.payload],
                error: null,
                
            }
        },

        checkUserId (state, action) {
            
            const {id} = action.payload;
            const userExists = state.value.find(user => user.id === id);

            if (Boolean(userExists)) {
                return {
                    ...state,
                    error: true,
                    status: "sucess"   
                }
            }
            
            return {
                ...state,
                error: false,
                status: "fail"
            }
        },

        resetState (state, action) {
            return initialState
        },

        updateAuthStatus: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        },
    },
});

export const { signupUser, checkUserId, updateAuthStatus } = authSlice.actions;
export default authSlice.reducer;