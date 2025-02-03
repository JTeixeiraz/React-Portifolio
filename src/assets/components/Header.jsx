import { useState } from 'react';
import './header.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header(){
    const [esconde, setEsconde] = useState(true);
    const hamb = ()=>{
        setEsconde(!esconde);
    };
    const check = document.querySelector('#sol');
    const darkmode = ()=>{
        var elemento = document.body;
        var h = document.querySelector('header')
        var a = document.querySelectorAll('.headerlinks');
        var botao = document.querySelector('.btnfalecomigo');
        var h1 = document.querySelectorAll('h1')
        var p = document.querySelectorAll('p')
        var input = document.querySelectorAll('input');
        var txtarea = document.querySelector('textarea')
        var h2 = document.querySelectorAll('h2')
        var h3 = document.querySelectorAll('h3')
        var label = document.querySelectorAll('label')
        var back = document.querySelectorAll('.card-back')

        botao.classList.toggle('darklinks')
        h.classList.toggle('blackHeader');
        elemento.classList.toggle('dark');
        txtarea.classList.toggle('darkinput')

        back.forEach((back)=>{
            back.classList.toggle('darktitulo')
        })
        label.forEach((label)=>{
            label.classList.toggle('darktitulo')
        })
        h3.forEach((h3)=>{
            h3.classList.toggle('darktitulo')
        })
        h2.forEach((h2)=>{
            h2.classList.toggle('darktitulo')
        })
        input.forEach((input)=>{
            input.classList.toggle('darkinput')
        });
        p.forEach((p)=>{
            p.classList.toggle('darktitulo')
        })
        h1.forEach((h1)=>[
            h1.classList.toggle('darktitulo')
        ]);
        a.forEach((a) =>{
            a.classList.toggle('darklinks')
        });
    };
    return(
        <header id="headergeral">
        <ul className="name">
            <li className="nome"><a href="#name" className="headerlinks">J.Teixeira</a></li>
        </ul>
        
        <div id='hamb'>
        <i class="bi bi-list" id='list' onClick={hamb}></i>
        </div>
        <div className={esconde ? 'informacao' : 'hide'}>
            <ul className="info">
                <i class="bi bi-x xiz" onClick={hamb}></i>
                <li className="sobre"><a href="#SobreMim" className='headerlinks'>Sobre</a></li>
                <li className="portifolio"><a href="#tec" className="headerlinks">Portifolio</a></li>
                <li className="contato"><a href="#Contato" className="headerlinks btoao"><button className="btnfalecomigo">Fale Comigo</button></a></li>
                <div onClick={darkmode}>
                    <i className="bi bi-moon-fill" id="sol"></i>
                </div>
            </ul>
        </div>  
    </header>
    )
}

export default Header;