import React from 'react'

function Card({nome, img, capital}) {
  return (
    <div>
        <h2>{nome}</h2>
        <img src={img}/>
        <h3>{capital}</h3>

    </div>
  )
}

export default Card