import './Projeto.css'

type ProjetoProps = {
    titulo: string,
    sinopse: string,
    imagem: string
}

export default function Projeto(props: ProjetoProps) {
    return (
        <div className="filme_content">
            <div className='foto_filme'>
                <img src={props.imagem} alt="" />
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}