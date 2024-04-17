import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        searchInput: '',
        movies: [],
    },

    reducers: {
        changeSearch(state, action) {
            state.searchInput = action.payload
        },

        setMovies(state, action) {
            state.movies = action.payload
        },

    }
})

export const {changeSearch, setMovies} = movieSlice.actions; //"mini-reducer-functions" - action creators
export const movieReducer = movieSlice.reducer;  //combined reducer