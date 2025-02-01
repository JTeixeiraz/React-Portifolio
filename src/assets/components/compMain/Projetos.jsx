import { useState } from 'react';
import './projetos.css'
function Projetos(){
    const [abre, setAbre] = useState(false);
    const Clickado = ()=>{
        setAbre(!abre);
    }
  
    return(
        <>
            <div id='responsProj'>
                <button onClick={Clickado} className='saiba'>Saiba Mais*</button>
                <div className={`mod ${abre ? 'aberto' : ''}`}>
                    <h1>Saindo do Site!</h1>
                    <h4>Deseja sair do site e ser direcionado ao GitHub?</h4>
                    <div className='botoes'>
                        <a href="https://github.com/JTeixeiraz" className='ir'><button>Ir</button></a>
                        <button onClick={Clickado}>Voltar</button>
                    </div>
                </div>
            </div>
            <div id='Proj'>
            </div>
        </>
    );
}

export default Projetos;