import './App.css';
import Characters from './components/Characters';
import CharCard from './components/CharCard';
import { useEffect, useState } from 'react';

function App() {

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => alert("Erro na importação da API!"))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
