import Chip from '@mui/material/Chip'
import { useGetGenreIdsQuery } from '../features/movie/movieApi'

export const GenreChip = (props) => {
    if (props === undefined || props.length === 0) {
        console.log('returnin')
        return null
    }

    const {data: genreIds, isLoading: genreLoading} = useGetGenreIdsQuery() 

    if (genreLoading || !genreIds) {
        return <div>Loading genres...</div>; // Or any loading indicator
    }

    const findGenre = (genreId) => {
        return genreIds.genres.find((genre) => genre.id == genreId)
    }

    return (
        <>
            {props.genre.map((category, key) => {
                const genre = findGenre(category)
                if (genre == undefined) return
                return (
                    <Chip key={key} label={genre.name} variant="outlined" size='small' sx={{marginTop: 1}}/>
                )
            })}
        </>
    )
}