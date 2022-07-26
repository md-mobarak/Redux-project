import React from 'react';

// import './MovieCard.scss'

const MovieCard = ({ movie }) => {

    return (
        <div className='row-cols-lg-4'>
            <div class="col">
                <div class="card">
                    <img src={movie.Poster} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;