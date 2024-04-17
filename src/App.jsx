import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { useGetGenreIdsQuery, useGetMovieQuery, useLazyGetMovieQuery } from './features/movie/movieApi'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { changeSearch } from './features/movie/movieSlice'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AiringToday from './components/AiringToday'
import PopularList from './components/PopularList'


const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

function App() {
	document.title = "WebProg | Movie DB"
	
	return (
		<ThemeProvider theme={darkTheme}>
			<div className="width-100">
				<NavBar/>
				<div className="flex-center">
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/popular' element={<PopularList/>} />
						<Route path='/airing' element={<AiringToday/>} />

					</Routes>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App

