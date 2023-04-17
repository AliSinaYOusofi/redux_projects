import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk
} from '@reduxjs/toolkit'

const selectId = (entity) => entity.id || 999;
    
const productAdapter = createEntityAdapter({
    selectId
});

const initialState = productAdapter.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const json = await response.json();
    console.log(json);
    return json.products
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            console.log(state);
            console.log(action.payload);
            productAdapter.upsertMany(state, action.payload)
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export const {
    seleteById:  selectProductById,
    selectIds: selectProductIds,
    selectAll: selectAllProducts,
} = productAdapter.getSelectors((state) => state.product);


export default productSlice.reducer;