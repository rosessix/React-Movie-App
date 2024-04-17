import { useDispatch, useSelector } from "react-redux";
import { useGetPopularMoviesQuery, useLazyGetMovieQuery} from "../features/movie/movieApi"
import { changeSearch } from "../features/movie/movieSlice";
import { Button, TextField, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

const PopularList = () => {
	const {data: movieData, isLoading: moviesLoading} = useGetPopularMoviesQuery()

    return (
        <>
            <Typography variant="h5" align="center">Popular Movies:</Typography>
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

export default PopularList