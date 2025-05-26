import './Lista.css'

function Lista(props){
    const itens = props.lista;
    console.log(itens)
    return(
        <ul className="lista_ul">
            {itens.map((item, index) => (
                <li key={index} className="listaItem">{item}</li>
            ))}
        </ul>
    )
}
export default Lista;