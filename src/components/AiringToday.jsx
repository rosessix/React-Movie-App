import { useDispatch, useSelector } from "react-redux";
import { useGetMoviesAiringTodayQuery, useLazyGetMovieQuery } from "../features/movie/movieApi"
import { changeSearch } from "../features/movie/movieSlice";
import { Button, TextField, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

const AiringToday = () => {
	const {data: movieData, isLoading: moviesLoading} = useGetMoviesAiringTodayQuery()

    return (
        <>
            <Typography variant="h5" align="center">Airing today:</Typography>
            <div className="grid-3">
                {movieData !== undefined && (
                    <>
                        {movieData.results.map((movie) => (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default AiringToday