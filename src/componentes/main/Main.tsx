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
            titulo:"Projeto Ensino",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/projetoEnsino"
        },
        {
            id:2,
            titulo:"Semana do Meio Ambiente",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/transformes.jpeg"
        },
        {
            id:3,
            titulo:" 2º Dia da Consciência Indígena",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/transformes.jpeg"
        },
        {
          id:4,
          titulo:" 2º Dia da Consciência Indígena",
          sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
          imagem:"/transformes.jpeg"
      },
      {
        id:5,
        titulo:" 2º Dia da Consciência Indígena",
        sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
        imagem:"/transformes.jpeg"
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
                
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
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
