import { use, useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';
import endPoints from './endpoints.json';

function App() {

  // Pegar o valor do input, que vai ser o dadosPais.name.common e a partir disso achar 

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
        lingua: dadosPais.lang
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







  // const [listaPaises, setListaPaises] = useState([]);

  // const api = "https://restcountries.com/v3.1/alpha";
  // const listaCodigos = endPoints.codigos;

  // const buscaPaisRandom = async (e) => {
  //   e.preventDefault();
  //   const random = Math.floor(Math.random() * listaCodigos.length); 
  //   const valorEscolhido = listaCodigos[random]; 
    
  //   try {
  //       const dados = await axios.get(`${api}/${valorEscolhido}`); 
  //       const dadosPais = dados.data[0]; 

  //       const pais = {
  //         nome: dadosPais.name.common,
  //         img: dadosPais.flags.png,
  //         capital: dadosPais.capital,
  //       };
        
  //       setListaPaises(prevLista => [pais, ...prevLista]); 
        
  //   } catch (error) {
  //       console.error(`Erro ao buscar país ${valorEscolhido}:`, error);
  //   }
  // }

  // useEffect(() => {
  //   buscaPaisRandom();
  // }, []);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder='nome do país em inglês'
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}  
        />
        <button type='submit'>Buscar</button>
      </form>
      <div id='div-card'>
        {listaPaises.length > 0 ? (
          listaPaises.map((cardData) => (
            <Card 
              key={cardData.id} // Chave única é obrigatória
              nome={cardData.nome}
              img={cardData.img} 
              capital={cardData.capital}
              continente={cardData.continente}
              regiao={cardData.regiao}
              lingua={cardData.lingua}
            />
            ))
        ) : (
          <p>Use a busca acima para adicionar países.</p>
        )}
      </div>

      {/*
        <button onClick={buscaPaisRandom}>Adicionar País Aleatório</button>
      
      
      <div id='div-card'>
        {listaPaises.length > 0 ? (
          listaPaises.map((cardData) => (
            <Card 
              nome={cardData.nome}
              img={cardData.img} 
              capital={cardData.capital}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div> */}
    </>
  )
}

export default App