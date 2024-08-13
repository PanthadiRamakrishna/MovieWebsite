import React from 'react'
import './Model.css'

function Model({movie,status, toggleModel}) {
  return (
    <div className={`movieModel ${status ? 'active' :undefined}`}>
<a href='#' className='modelClose' onClick={toggleModel}>
    <ion-icon name="close-outline"></ion-icon>
</a>
<iframe 
width="1280"
height="720"
src={movie.video}
title={`${movie.title} | Official Trailer`}
frameBorder="0"
allow='accelerometer; clipboard-write; encrypted-media; gyroscope;picture-in-picture; web-share'
allowFullScreen
>

</iframe>
    </div>
  )
}

export default Model