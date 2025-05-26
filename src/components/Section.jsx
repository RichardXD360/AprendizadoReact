import { Children } from "react";
import "./Section.css"
import { useState } from "react";


function Section(props){
    const [detalhes, mostrarDetalhes] = useState(false); 
    const container_lista = document.querySelector("container-lista");
    let fechado = true;
    return(
        <section className="section">
            <h2>{props.title}</h2>
            <img src={props.imagem} alt="foto do usuário" className="imagem"/>
            {detalhes ? (
                <>
                <div className="container-lista">
                    <p className='legenda'>{props.legenda}</p>
                    {props.children}
                    <a onClick={() => mostrarDetalhes(false)}>Mostrar menos</a>
                </div>
                </>
            ): (
            <>
                <a onClick={() => mostrarDetalhes(true)}>Mostrar mais</a>
            </>
            )}
        </section>
    )
}
export default Section;