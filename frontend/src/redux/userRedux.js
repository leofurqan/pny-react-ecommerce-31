import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        isFetching: false,
        currentUser: null,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, actions) => {
            state.isFetching = false
            state.currentUser = actions.payload.user
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logout: (state) => {
            state.isFetching = false
            state.currentUser = null
            state.error = false
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions
export default userSlice.reducer