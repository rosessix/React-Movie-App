import { configureStore } from '@reduxjs/toolkit'
// import counterSlice  from '../features/counter/counterSlicer'
import { movieApi } from '../features/movie/movieApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieReducer } from '../features/movie/movieSlice'

const store = configureStore({
    reducer: {
        movie: movieReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)


export default store