import React, { Component } from 'react'
import Api from './Api'

export default class Resultado extends Component{
    
    state= {
        starwars: [],
    }

    async componentDidMount(){
        const response = await Api.get('')

        this.setState({starwars: response.data})
    }

    render(){

        const {starwars} = this.state

        return(
            <div>
                <h1>Resultado da Busca</h1>
                {starwars.map(sw => {
                    <li>
                        {sw.object.name}
                    </li>
                })}
            </div>
        )
    }

}