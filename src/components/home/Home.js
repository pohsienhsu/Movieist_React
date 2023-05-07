import React from 'react'
import Hero from '../hero/Hero';

const Home = (props) => {

  const {movies} = props;

  return (
    <div>
      <Hero movies={movies} />
    </div>
  )
}

export default Home;