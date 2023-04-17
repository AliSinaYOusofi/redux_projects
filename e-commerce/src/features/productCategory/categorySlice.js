import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';

const categoryAdapter = createEntityAdapter({
    selectId: (category) => category.id || 0
});

const initialState = categoryAdapter.getInitialState({
    status: 'idle',
    error: null
})

export const getCategories = createAsyncThunk("category/getCategories", async (category) => {
    
    const response = await fetch(`https://dummyjson.com/products/category/${category}`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    });

    const json = await response.json();

    return json.products;
});

export const categorySlice = createSlice({
    
    name: 'category',
    
    initialState,
    
    reducers: {
        updateStatus: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        },
        resetState : (state) => {
            return initialState
        }
    },
    
    extraReducers(builder) {
        builder
        .addCase(getCategories.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            categoryAdapter.setAll(state, action.payload);
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const {updateStatus} = categorySlice.actions;
export const {selectAll: selectAllCategories} = categoryAdapter.getSelectors(state => state.category);
export default  categorySlice.reducer;