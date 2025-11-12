import { use, useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import './styles/header.css';
import './styles/cards.css';

function App() {
  const apiNome = "https://restcountries.com/v3.1/name";

  const [listaPaises, setListaPaises] = useState([]);
  const [valorInput, setValorInput] = useState('');

  const buscaNome = async (valorInput) => {
    try{

      const input = valorInput.trim();

      const endPoint = await axios.get(`${apiNome}/${input}`); //restcountries.com/v3.1/name/germany

      const dadosPais = endPoint.data[0];

      const pais = {
        nome: dadosPais.name.common,  // Germany
        img: dadosPais.flags.png,    //  Flag
        capital: dadosPais.capital, //   Berlin
        continente: dadosPais.region,
        regiao: dadosPais.subregion,
        currency: dadosPais.capital
      }

      setListaPaises(prevLista => [pais, ...prevLista]); 
    }
    
    catch(error){
        console.log ('Deu erro!');
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      buscaNome(valorInput);
    }

  return (
    <>
    <header>
        <h1>
          <img src="public\images\logoFlagpedia.png" alt="" id='logo'/>
        </h1>
        <nav>
            <div id='div-btn-2'>
              <button id='btn-inicio'>Inicio</button>
              <button id='btn-sobre'>Sobre</button>
            </div>
              <button id='btn-logout'>LogOut</button>
          </nav>
      </header>
      <main>
        <h2 id='pesquisa-h2'>Pesquise um país aleatório...</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder='nome do país em inglês'
            value={valorInput}
            onChange={(e) => setValorInput(e.target.value)}  
          />
          <button type='submit' id='btn-busca'>Buscar</button>
        </form>
        <div id='div-card'>
          {listaPaises.length > 0 ? (
            listaPaises.map((cardData) => (
              <Card 
                key={cardData.id}
                nome={cardData.nome}
                img={cardData.img} 
                // capital={cardData.capital}
                // continente={cardData.continente}
                // regiao={cardData.regiao}
                // currency={cardData.currency}
              />
              ))
          ) : (
            <p></p>
          )}
        {/* Segundo botão para gerar um pais aleatorio */}

        </div>
      </main>
    </>
  )
}

export default App