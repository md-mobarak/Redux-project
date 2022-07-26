import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../../features/movies/movieSlice';
import MovieCard from '../../MovieCard/MovieCard'
// import './MovieListing.scss'

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies);

    return (
        <div className='movie-wrapper'>
            <div>
                <h2>Movies</h2>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col-lg-3 '>
                        {movies?.Search?.map((movie, index) =>
                            <div class="col">
                                <div class="card">
                                    <img src={movie.Poster} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovieListing;