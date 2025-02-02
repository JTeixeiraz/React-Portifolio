import { useState } from 'react';
import './tecnologias.css'
import { DiReact } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiCode } from "react-icons/di";
function Slide() {
    const [flipped, setFlipped] = useState(false);
  
    const handleFlip = () => {
      setFlipped(!flipped);
    };
    //2
    const [flip, setFlip] = useState(false);
  
    const hanFlip = () => {
      setFlip(!flip);
    };
    //3
    const [sqlflip, setsqlFlip] = useState(false);
  
    const sqlhanFlip = () => {
      setsqlFlip(!sqlflip);
    };
    //4
    const [gitflip, setgitFlip] = useState(false);
  
    const githanFlip = () => {
      setgitFlip(!gitflip);
    };
    //5
    const [codeflip, setcodeFlip] = useState(false);
  
    const codethanFlip = () => {
      setcodeFlip(!codeflip);
    };

    return (
        <div id='Portifolio'>
    <div id='containercard'>
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className='card-inner'>
          <div className='card-front'>
            <DiReact className='react'/>
            <h1>ReactJS</h1>
          </div>
          <div className='card-back'>
            Tendo diversos projetos já realizados na tecnologia,
            o React atualmente é a tecnologia principal que trabalho
            atualmente, mas estou sempre disposto a conhecer tecnologias
            diferentes com finalidades diferentes.
          </div>
        </div>
        </div>
      
        <div className={`card ${flip ? 'flipped' : ''}`} onClick={hanFlip}>
        <div className='card-inner'>
          <div className='card-front'>
            <DiJsBadge className='js'/>
            <h1>JavaScript</h1>
          </div>
          <div className='card-back'>
            A base da maioria dos FrameWorks para desenvolvimento WEB, com 2 anos
            estudando a linguagem, tenho experiência em JavaScript, colocando em diversos
            projetos.
          </div>
        </div>
      </div>

      <div className={`card ${sqlflip ? 'flipped' : ''}`} onClick={sqlhanFlip}>
        <div className='card-inner'>
          <div className='card-front'>
          <DiMysql className='sql'/>
            <h1>MySQL</h1>
          </div>
          <div className='card-back'>
            Tendo estudado a linguagem por 1 ano durante meu Curso Técnico, aprendi
            a efetuar a criação de banco de dados e analisar e armazenar dados na database.
          </div>
        </div>
      </div>

      <div className={`card ${gitflip ? 'flipped' : ''}`} onClick={githanFlip}>
        <div className='card-inner'>
          <div className='card-front'>
          <DiGit className='git'/>
            <h1>Git/GitHub</h1>
          </div>
          <div className='card-back'>
            Utilizado na maioria de meus projetos, um exemplo seria este portifolio
            todos os commits feitos estão no meu perfil do github! Estou sempre tentando
            deixar o controle de versão o mais organizado possivel, para que futuros programadores
            ou eu mesmo possa me localizar no projeto
          </div>
        </div>
      </div>

      <div  id='html' className={`card ultimo ${codeflip ? 'flipped' : ''}`} onClick={codethanFlip}>
        <div className='card-inner'>
          <div className='card-front'>
          <DiCode className='code'/>
            <h1>Html/Css</h1>
          </div>
          <div className='card-back'>
            A base de todo conceito do Desenvolvimento Front-End, já tendo um conhecimento
            sólido e estruturado sobre a criação de sites utilizando html e css nativo, presente
            em todos meus projetos.
          </div>
        </div>
      </div>
      </div>
    </div>

    );
  }
  
  export default Slide