
import './projetos.css'
import { DiReact } from "react-icons/di";
import { DiNetmagazine } from "react-icons/di";
function Projetos(){

  
    return(
        <>
            <div id='responsProj'>
                <a href="https://github.com/JTeixeiraz" className='asaiba'><button className='saiba'>Saiba Mais*</button></a>
                
            </div>
            <div id='Proj'>
                <div className='cardproj'>
                    <h1 className='projetoscardproj'>Projetos</h1>
                    <div className='softwares'>
                        <a href="https://primeiro-projeto-react-teixasz-teste.netlify.app/" className='cardsoft'>
                        <div >
                            <DiReact className='react'/>
                            <h3>ToDo List</h3>
                            <p>projeto feito em ReactJS para simular
                                uma To Do List em Web.
                            </p>
                        </div>
                        </a>
                        <a href="https://github.com/JTeixeiraz/CalculadoraSimplesCSharp" className='cardsoft'>
                        <div >
                            <DiNetmagazine  className='csharp'/>
                            <h3>Calculadora</h3>
                            <p>Projeto simples feito em P.O.O para realizar
                                uma calculadora basica.
                            </p>
                        </div>
                        </a>
                    </div>
                    <a href="https://github.com/JTeixeiraz" className='asaiba'><button className='saibamais'>Saiba Mais</button></a>
                </div>
            </div>
        </>
    );
}

export default Projetos;