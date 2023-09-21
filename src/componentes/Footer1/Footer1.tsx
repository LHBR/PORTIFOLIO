import './Footer1.css'

function Footer1(){
    return(
        <footer className='footer'>
        <div className='nome'>Portifólio</div>
        <div className='tt'>
            <div className='ctt'>Contato</div>
            <nav className="company">
                        <ul><a className="text">Empresas</a>
                            <li>
                                <a className="barbies" href="#">IFMS</a>
                            </li>
                            <li>
                                <a className="barbies" href="#">GOV</a>
                            </li>
                            <li>
                                <a className="barbies" href="#">TEREeCO</a>
                            </li>
                            <li>
                                <a className="barbies" href="#">ROPHEE</a>
                            </li>
                        </ul>
                    </nav>

        </div>
        </footer>
    )
}
export default Footer1