import React from 'react'

function Card({key, nome, img, capital, continente, regiao, lingua}) {
  return (
    <div id='card'>
        <img src={img} id='flag-img'/>
        <h2>{nome}</h2>
        <div id='div1'>
          <span>Capital:</span>
          <span><strong>{capital}</strong></span>
        </div>
        <hr />
        <div id='div1'>
          <span>Continente:</span>
          <span><strong>{continente}</strong></span>
        </div>
        <hr />
        <div id='div1'>
          <span>Região:</span>
          <span><strong>{regiao}</strong></span>
        </div>
        <hr />
        <div id='div1'>
          <span>Lingua:</span>
          <span><strong>{lingua}</strong></span>
        </div>

    </div>
  )
}

export default Card