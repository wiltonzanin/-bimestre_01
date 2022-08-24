function TicketType(props) {

    console.log(props)
    return (
        <div>
            {props.ingressos.map(ingresso => {
                return (
                    <div key={ingresso.key}>
                        <ul>
                            <li>
                                <span>{ingresso.tipo}</span>
                                <span>{ingresso.preco}</span>
                            </li>
                        </ul>

                    </div>
                );
            })}
        </div>
    );
}

export default TicketType;