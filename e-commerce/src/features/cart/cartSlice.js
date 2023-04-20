import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
    selectId : (entities) => entities.id
});


const initialState = cartAdapter.getInitialState({
    status: "idle",
    error: null
});

export const getProductWithGivenId = createAsyncThunk("cart/getProductWithGivenId", async(id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await response.json();
    console.log(json, 'cart thunk');
    return json;

})
export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        updateStatus(state, action) {
            return {
                ...state,
                status: action.payload
            }
        },

        deleteFromCart(state, action) {
            const id = action.payload;
            cartAdapter.removeOne(state, id);
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getProductWithGivenId.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getProductWithGivenId.fulfilled, (state, action) => {
            state.status = "success";
            cartAdapter.addOne(state, action.payload);
            state.error = null;
        })
        .addCase(getProductWithGivenId.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })

    }
});

export const {
    selectAll: getAllProductsInCart,
    selectById: getProductByIdInCart,
} = cartAdapter.getSelectors(state => state.cart);

export const {
    updateStatus,
    deleteFromCart
} = cartSlice.actions;
export default cartSlice.reducer;