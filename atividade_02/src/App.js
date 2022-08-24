import Event from './components/eventComponent/event';
import TicketType from './components/ticketTypeComponent/ticketType';
import './App.css';

const ingressos = [
  { key: 1, tipo: "Camarote (open bar): ", preco: "R$ 150,00" },
  { key: 2, tipo: "Camarote: ", preco: "R$ 100,00" },
  { key: 3, tipo: "Front-stage: ", preco: "R$ 60,00" },
  { key: 4, tipo: "Pista: ", preco: "R$ 30,00" },
]

function App() {
  return (
    <div className={"container"}>
      <div className="card">
        <Event
          nome={"Gustavo lima"}
          data={"2 de agosto de 2019 (Sexta-feira)"}
          horario={"18h30 - 00h00"}
          local={"Parque do Povo"}
          cidade={"Campina Grande/PR"}
          genero={"Arte em forma de SERTANEJO"} />
        <div className={"subTitle"}>
          Ingressos
        </div>
        <TicketType ingressos={ingressos} />
      </div>
    </div>
  );
}

export default App;
