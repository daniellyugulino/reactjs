import React from 'react'
import './Principal.css'
import img from '../star-wars.png'

export default props =>
    <div>
        <img src={img} alt=""/>
        <h2>Desafio Fontend</h2>
        <form>
            <input type="text" name="pesquisa" placeholder="Digite o nome do personagem" className="entrada"/>
            <p><input type="submit" value="Enviar" className="btnEnviar"/></p>
        </form>
    </div>
