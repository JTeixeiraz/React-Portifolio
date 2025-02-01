import './contato.css';

function Contato(){
    return(
        <div id='contato'>
            <h1>Contato</h1>
            <div className='cardinput'>
                <div className='lineinput'>
                    <input type="text" placeholder='Nome'/>
                    <input type="text" placeholder='Sobrenome'/>
                </div>
                <div className="lineinput">
                    <input type="text" placeholder='Telefone' />
                    <input type="text" placeholder='email'/>
                </div>
                <input type="text"/>
            </div>
        </div>
    )
}

export default Contato;