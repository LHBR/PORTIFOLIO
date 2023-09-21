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
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/projetoEnsino.png"
        },
        {
            id:2,
            titulo:"Premiação FECINAVI",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/fecinavi.JPG"
        },
        {
            id:3,
            titulo:" 2º Dia da Consciência Indígena",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/conciencianegra.JPG"
        },
        {
          id:4,
          titulo:"Semana do Meio Ambiente",
          sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
          imagem:"/meioambiente.png"
      },
      {
        id:5,
        titulo:"Scooby",
        sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
        imagem:"/filho.jpg"
    },
    {
      id:6,
      titulo:" 2º Dia da Consciência Indígena",
      sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem:"/transformes.jpeg"
  },



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
