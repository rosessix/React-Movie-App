import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'

const API_KEY = '27b248240d8dd941d6bb93d674429e31'
const BASE_URL = 'https://api.themoviedb.org/3/'

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getMovie: builder.query({
            query: (movie) => {
                return {
                    url: 'search/movie',
                    params: {
                        query: movie,
                        api_key: API_KEY,
                    }
                }
            }
        }),

        getPopularMovies: builder.query({
            query: (movie) => {
                return {
                    url: 'tv/popular',
                    params: {
                        query: movie,
                        api_key: API_KEY,
                        sort_by: 'popularity.desc',
                    }
                }
            }
        }),

        getMoviesAiringToday: builder.query({
            query: (movie) => {
                return {
                    url: 'tv/airing_today',
                    params: {
                        query: movie,
                        api_key: API_KEY,
                        sort_by: 'popularity.desc',
                    }
                }
            }
        }),


        getGenreIds: builder.query({
            query: () => {
                const url = `genre/movie/list?language=en&api_key=${API_KEY}`
                return url
            }
        })
    })
})

export const {useGetMovieQuery, useLazyGetMovieQuery, useGetGenreIdsQuery, useLazyGetGenreIdsQuery, useGetPopularMoviesQuery, useGetMoviesAiringTodayQuery} = movieApi