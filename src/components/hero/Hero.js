import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import "./Hero.css";

const Hero = (props) => {

  const { movies } = props

  return (
    <div className={'movie-carouse-container'}>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper>
              <div className={'movie-card-container'}>
                <div className={'movie-card'}>
                  <div className={'movie-detail'}>
                    <div className={'movie-poster'}>
                      <img src={movie.poster}/>
                    </div>
                    <div className={'movie-title'}>
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Hero;