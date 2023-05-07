import React from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

import "./Trailer.css";


const Trailer = (props) => {

  const params = userParams();
  const key = params.ytTrailerId;

  return (
    <div className={'react-player-container'}>
      {(key != null) ? 
        <ReactPlayer 
          controls="true" 
          player={true} 
          url={`https://www.youtube.com/watch?v=${key}`} 
          width="100%"
          height="100%"
        /> : null }
    </div>
  )
}

export default Trailer;