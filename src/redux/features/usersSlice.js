import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getUser = createAsyncThunk('users/fetchUsers',async () => {
    const res = await fetch('https://api.github.com/users') ; 
    const data = await res.json();
    return data ;
})

const initialState = {
    loading: false,
    data : [],
    error: null
}

export const  userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.pending] : (state,action)=>{
            state.loading = true
        },
        [getUser.fulfilled] : (state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        [getUser.pending] : (state,action)=>{
            state.loading = false
            state.error = 'error'
        },
    }
})


export const {} = userSlice.actions;


export default userSlice.reducer;