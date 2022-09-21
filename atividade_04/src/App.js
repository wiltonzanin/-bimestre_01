import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
      const json = await response.json();
      setData(json);
    }

    fetchData()
      .catch(console.error);

    console.log("Dados: ", data);

  }, [])

  return (
    <div className="App">
      <span className='Title'>Lista de repositórios da Rocketseat</span>
      {data === undefined
        ?
        <span>Carregando...</span>
        :
        <ul className='DataList'>
          {data.map((item) => {
            return (
              <li key={item.id} className='ListItem'>
                <span className='ListTitle'>{item.name.toUpperCase()}</span>
                <span className='ListDescription'>{item.description}</span>
                <a href={item.html_url} target="_blank" className='btn'>Acessar repositório</a>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default App;
