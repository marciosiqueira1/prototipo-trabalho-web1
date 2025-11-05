import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';
import endPoints from './endpoints.json';

function App() {

  const [listaPaises, setListaPaises] = useState([]); 

  const api = "https://restcountries.com/v3.1/alpha";
  const listaCodigos = endPoints.codigos;

  const buscaPais = async (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * listaCodigos.length); 
    const valorEscolhido = listaCodigos[random]; 
    
    try {
        const dados = await axios.get(`${api}/${valorEscolhido}`);
        const dadosPais = dados.data[0];

        const pais = {
          nome: dadosPais.name.common,
          img: dadosPais.flags.png,
          capital: dadosPais.capital,
        };
        
        setListaPaises(prevLista => [pais, ...prevLista]); 
        
    } catch (error) {
        console.error(`Erro ao buscar país ${valorEscolhido}:`, error);
    }
  }

  useEffect(() => {
    buscaPais();
  }, []);


  return (
    <>

      <form action="">
        
        {/* <input 
          type="text" 
          placeholder='Digite o país aqui'
          value={valorDigitado}
          onChange={handleChange}  
        />

        <button onClick={buscaPaisPesquisa}>Adicionar Novo País</button> */}

        <button onClick={buscaPais}>Adicionar Novo País</button>
      </form>
      
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
      </div>
    </>
  )
}

export default App