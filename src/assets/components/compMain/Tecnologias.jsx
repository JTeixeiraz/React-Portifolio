
import Projetos from './Projetos';
import Slide from './Slides';
import './tecnologias.css'

function Tecnologias(){
    return(
        <div id='tec'>
            
            <h1 className='htec'>Tecnologias</h1>
            <Slide />
            <Projetos />
        </div>
    );
}

export default Tecnologias;