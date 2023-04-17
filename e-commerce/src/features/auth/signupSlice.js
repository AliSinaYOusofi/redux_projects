import {
    createSlice,
} from '@reduxjs/toolkit';


const initialState = {
    value: [],
    status: "idle",
    error : null,
}


const signupSlice = createSlice({
    
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
            
            console.log(userExists, 'user exists');

            if (Boolean(userExists)) {
                console.log('if');
                
                return {
                    ...state,
                    error: null,
                    status: "sucess"   
                }
            }
            
            return {
                ...state,
                error: false,
                status: "fail"
            }
        },

    },
});

export const { signupUser, checkUserId } = signupSlice.actions;
export default signupSlice.reducer;