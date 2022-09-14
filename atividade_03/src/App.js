import React, { useState } from 'react';
import './App.css';

function App() {

  var pattern = new RegExp('^[0-9]*$');

  const [valor, setValor] = useState();
  const [total, setTotal] = useState(0);

  function somar(numero) {
    if (!pattern.test(parseInt(numero))) {
      alert("Por favor, insira apenas números!");
      return;
    }
    var resultado = parseInt(total) + parseInt(numero);
    setTotal(resultado);
  }

  function subtrair(numero) {
    setTotal(parseInt(total) - parseInt(numero));
  }

  return (
    <div className="App">
      <div className="content">
        <label>Insira um número</label>
        <input type="number" id="numberInput" onChange={(e) => setValor(e.target.value)} />
        <button className='btnAdd' onClick={() => { somar(valor) }}>Somar</button>
        <button className='btnDelete' onClick={() => { subtrair(valor) }}>Subtrair</button>
        <button className='btnReset' onClick={() => { setTotal(0) }}>Resetar</button>
        <label>Contador: {total}</label>
      </div>
    </div>
  );
}

export default App;
