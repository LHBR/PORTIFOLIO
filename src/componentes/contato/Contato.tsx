import './Contato.css'
import { useState } from "react";

function Contato() {
    const [nome,setnome] = useState("")
    function mudanome(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setnome(e.target.value)
    }
    const [email,setemail] = useState("")
    function mudaemail(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setemail(e.target.value)
    }
    const [mensagem,setmensagem] = useState("")
    function mudamensagem(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setmensagem(e.target.value)
    }
    return (
        <div className='centra'>
            <form className="form">
                <p className="title">CONTATO</p>
                <p className="message">Entre em contato conosco!</p>
                <div className="flex">
                    <label>
                        <input className="input" type="text" placeholder="" onChange={mudanome}/>
                            <span>NOME</span>
                            <p>Nome:{nome}</p>
                    </label>
                </div>
                <label>
                    <input className="input" type="email" placeholder="" onChange={mudaemail}/>
                        <span>EMAIL</span>
                        <p>Email:{email}</p>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" onChange={mudamensagem}/>
                        <span>MENSAGEM</span>
                        <p>Mensagem:{mensagem}</p>
                </label>
                <button className="submit">ENVIAR</button>
            </form>
        </div>

    )
}

export default Contato