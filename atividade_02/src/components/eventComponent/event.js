import './style.css';

function Event(props) {
    return (
        <div className={"containerEvent"}>
            <div className={"title"}>
                <span>{props.nome}</span>
            </div>
            <div><b>Data:</b> {props.data}</div>
            <div><b>Horario:</b> {props.horario}</div>
            <div><b>Local:</b> {props.local}</div>
            <div><b>Cidade:</b> {props.cidade}</div>
            <div><b>Genero:</b> {props.genero}</div>
        </div>
    );
}

export default Event;