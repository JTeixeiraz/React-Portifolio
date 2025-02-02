import foto from '../../images/eu.jpeg'
import './sobre.css'

function SobreMim(){
    return(
        <div id="SobreMim">
            <div className="cardbox">
                <h1 id='about'>Sobre Mim</h1>
                <div className="content">
                    <img src={foto} alt="foto" className='joao'/>
                </div>
                <p>
                Olá! Meu nome é João, atualmente, estou cursando o ensino médio em uma escola técnica de TI chamada Cotemig. Desde o primeiro ano, fui introduzido à lógica de programação utilizando o VisualG, que me proporcionou uma base sólida. <br />

                No segundo ano, mergulhei em conceitos mais avançados, como Lógica de Programação em C#, Banco de Dados em SQL, Desenvolvimento Front-End e Ambientes Computacionais. Foi nesse período que descobri minha verdadeira vontade de me tornar um desenvolvedor web. <br />

                Agora, no terceiro ano, estou focando em Desenvolvimento Web e Mobile. Tenho vários projetos em Front-End que mostram meu crescimento e aprendizado ao longo do tempo. Atualmente, desenvolvo meus WebApps usando React.JS com Vite e também tenho conhecimento em Node.JS, TailwindCSS, PHP e Git/GitHub. <br />

                Estou animado para continuar aprendendo e desenvolvendo minhas habilidades, e estou ansioso para compartilhar meus projetos com você!
                </p>
            </div>
        </div>
    );
}

export default SobreMim;