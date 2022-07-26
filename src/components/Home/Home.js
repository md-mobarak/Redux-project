import axios from 'axios';
import React, { useEffect } from 'react';
import MovieListing from './MovieListing/MovieListing';
import MovieApis from '../../common/Apis/MovieApis';
import { ApiKeys } from '../../common/Apis/MovieApiKyes';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
const Home = () => {
    const movieText = "Harry"
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await MovieApis.get(`?apiKey=${ApiKeys}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log('err', err);
                })
            // console.log(res.data.Search, "from API");
            dispatch(addMovies(res.data))
        }
        fetchMovies()
    }, [dispatch])

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;