import { useState } from 'react';
import './header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header(){
    const [esconde, setEsconde] = useState(true);
    const hamb = ()=>{
        setEsconde(!esconde);
    };
    
    return(
        <header id="headergeral">
        <ul className="name">
            <li className="nome"><a href="#" className="headerlinks">J.Teixeira</a></li>
        </ul>
        
        <div id='hamb'>
        <i class="bi bi-list" id='list' onClick={hamb}></i>
        </div>
        <div className={esconde ? 'informacao' : 'hide'}>
            <ul className="info">
                <i class="bi bi-x xiz" onClick={hamb}></i>
                <li className="sobre"><a href="#SobreMim" className="headerlinks">Sobre</a></li>
                <li className="portifolio"><a href="#tec" className="headerlinks">Portifolio</a></li>
                <li className="contato"><a href="#Contato" className="headerlinks btoao"><button className="btnfalecomigo">Fale Comigo</button></a></li>
                <div>
                    <button onclick="darkmode()" className="tema" id="check"><i className="bi bi-moon-fill" id="sol"></i></button>
                </div>
            </ul>
        </div>  
    </header>
    )
}

export default Header;