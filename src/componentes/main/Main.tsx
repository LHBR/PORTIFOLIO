import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'
type ProjetoType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const projeto:ProjetoType[] = [
        {
            id:1,
            titulo:"Apresentação FECINAVI",
            sinopse:"Foi muito legal estar apresentando um projeto que desenvolvi em um evento aberto.",
            imagem:"/projetoEnsino.png"
        },
        {
            id:2,
            titulo:"Premiação FECINAVI",
            sinopse:"Foi uma experiencia e sensação muito boa ganhar em 3 lugar na fecinavi.",
            imagem:"/fecinavi.JPG"
        },
        {
            id:3,
            titulo:" 2º Dia da Consciência Indígena",
            sinopse:"Mesmo no ead consegui aprender demais sobre o tema e tambem fui monitor.",
            imagem:"/conciencianegra.JPG"
        },
        {
          id:4,
          titulo:"Semana do Meio Ambiente",
          sinopse:"Foi uma experiencia muito boa, pois pude aprender muito.",
          imagem:"/meioambiente.png"
      },
      {
        id:5,
        titulo:"Scooby",
        sinopse:"Scooby meu filho, ele é meu cachorro querido.",
        imagem:"/filho.jpg"
    }
  
    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Buscar Projeto</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                   
                </div>
            </div>
            <main className="content-main">
                {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((filme:ProjetoType)=>
                    <Projeto key={filme.id} 
                           titulo={filme.titulo} 
                           sinopse={filme.sinopse} 
                           imagem={filme.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}
