import { useState } from 'react';
import './contato.css';
function Contato(){

        const [tel, setTel] = useState('')
        const MudaInput = (event)=>{
            let limpaValor = event.target.value.replace(/\D/g, '').substring(0, 11);

             let numeroFormatado = '';

            if (limpaValor.length > 0) {
            numeroFormatado += `(${limpaValor.slice(0, 2)})`;
            }

            if (limpaValor.length > 2) {
            numeroFormatado += `${limpaValor.slice(2, 7)}`;
            }

            if (limpaValor.length > 7) {
            numeroFormatado += `-${limpaValor.slice(7, 11)}`;
            }

            setTel(numeroFormatado);
        }

    return(
      <div id='Contato'> 
      <div>
        <h1>Contato</h1>
        <p>joaopedroteixeirareis@gmail.com <br /> 
        (31)98770-5732</p>
    </div>
        <div className='contatoContent'>
            <form action="" className='formulario'>
                <div className='inputform nameinpt'>
                    <label htmlFor="">Nome</label>
                    <input 
                        type="text" 
                    />
                </div>
                <div className='inputform sobrenome'>
                    <label htmlFor="">Sobrenome</label>
                    <input 
                        type="text" 
                    />
                </div>
                <div className='inputform mail'>
                    <label htmlFor="">Email</label>
                    <input 
                        type="email" 
                        placeholder='exemplo@gmail.com'
                    />
                </div>
                <div className='inputform tell'>
                    <label htmlFor="">Telefone</label>
                    <input 
                        value={tel}
                        onChange={MudaInput}
                        type="tell" 
                        placeholder='+55 (xx)xxxx-xxxx' 
                        id='tell'
                    />
                </div>
                <textarea 
                    name="mensagem" 
                    id="txtarea" 
                    placeholder='Deixe sua mensagem...'
                ></textarea>
                <div className='inptsubmt'>
                <input 
                    type="submit" 
                    name="" 
                    id="submit" 
                />
                </div>
            </form>
        </div>
      </div>
    )
}

export default Contato;