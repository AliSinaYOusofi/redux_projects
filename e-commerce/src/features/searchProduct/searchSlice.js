import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter
} from '@reduxjs/toolkit';


const searchAdapter = createEntityAdapter({
    selectId: (search) => search.id || 0,
})

export const getSearchProduct = createAsyncThunk("search/getSearchProduct", async (search) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${search}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    });

    const json = await response.json();
    console.log(json, 'searched products');
    return json.products;
});

export const searchByTitle = createAsyncThunk("search/searchByTitle", async (title) => {
    
    const response = await fetch(`https://dummyjson.com/products?select=${title}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    const json = await response.json();
    console.log(json, 'searched by ttitle', title);
    return json.products;
})

const initialState = searchAdapter.getInitialState({
    status: "idle",
    error: null
});

export const searchSlice = createSlice({
    
    name: "search",
    initialState,
    reducers: {

    },

    extraReducers(builder) {
        builder
        .addCase(getSearchProduct.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getSearchProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            searchAdapter.setAll(state, action.payload);
            state.error = null
        })
        .addCase(getSearchProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(searchByTitle.pending, (state) => {
            state.status = "loading"
        })
        .addCase(searchByTitle.fulfilled, (state, action) => {
            state.status = "success"
            searchAdapter.setAll(state, action.payload);
        })
        .addCase(searchByTitle.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const {selectAll: selectAllSearch} = searchAdapter.getSelectors((state) => state.search);

export default searchSlice.reducer;