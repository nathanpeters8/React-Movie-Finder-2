import React from 'react';
import { Link } from 'react-router-dom';
import { json, checkStatus } from './utils';

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div className='row'>
      <div className='col-4 col-md-2 col-lg-1 mb-3'>
        <Link to={`/movie/${imdbID}`}>
          <img src={Poster} className='img-fluid' />
        </Link>
      </div>
      <div className='col-8 col-md-10 col-lg-11 mb-3'>
        <Link to={`/movie/${imdbID}`}>
          <h4>{Title}</h4>
          <p>{Type} | {Year}</p>
        </Link>
      </div>
    </div>
  );
};
