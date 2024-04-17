import { useDispatch, useSelector } from "react-redux";
import { useLazyGetMovieQuery } from "../features/movie/movieApi"
import { changeSearch } from "../features/movie/movieSlice";
import { Button, TextField, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

const Home = () => {
	const [getMovieQuery, {data: movieData, isLoading: moviesLoading}] = useLazyGetMovieQuery()
    const searchInput = useSelector(state => state.movie.searchInput);
	const dispatch = useDispatch()
	const handleSearchChange = (movie) => {
		dispatch(changeSearch((movie)))
	}

    const searchMovie = () => {
		if (searchInput.length === 0 || searchInput === ' ') {
			return alert('You must input something.')
		}

		getMovieQuery(searchInput)
	}

    return (
        <>
            <>
                <Typography align="center">Please input a movie name that you'd like to search for!</Typography>
                <div className="flex-row">
                    <TextField id="outlined-basic" label="Movie name" variant="filled" onChange={(e) => handleSearchChange(e.target.value)}/>
                    <Button variant='contained' color="success" onClick={() => searchMovie()}>Search!</Button>
                </div>
                <Typography variant="h5" align="center">Results:</Typography>
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
        </>
    )
}

export default Home