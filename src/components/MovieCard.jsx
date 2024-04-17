import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Chip from '@mui/material/Chip'

import {GenreChip} from './GenreChip'
import { movieApi } from '../features/movie/movieApi'

export const MovieCard = (props) => {
    const movie = props.movie
    if (movie.poster_path == undefined) {
        return
    }

    let title = movie.title
    if (movie.title == undefined && movie.name != undefined) {
        title = movie.name
    }
    
    return (
        
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{height: '150', objectFit: 'contain'}} component="img" image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` }/>
            <GenreChip genre={movie.genre_ids}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.overview}
                </Typography>
                <Typography variant="caption" color="GrayText">
                    Vote average: {movie.vote_average}
                </Typography>
            </CardContent>
        </Card>
    )
}