import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const extendApiUsers = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "/users",
            transformErrorResponse: responseData => {
                return userAdapter.setAll(initialState, responseData)
            }
        }),
    })
});

export const {useGetUsersQuery} = extendApiUsers;
export const selectAllUsers = apiSlice.endpoints.getUsers.select();

export const {
    selectAll: selectAllUsersCached,
    selectById: selectUserById
} = userAdapter.getSelectors(state => selectAllUsers(state) ?? initialState);
