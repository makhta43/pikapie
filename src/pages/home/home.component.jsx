import React from "react";
import {Form} from "react-bootstrap";
import "./home.styles.css"
import PokeEntry from '../../components/pokeEntry.component.jsx'

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            pikachu: [],
            search: ''
        }
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
        .then(response => response.json())
        .then(data => this.setState(
        {
            pikachu: data
        }
        )
        )
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    render(){
        const {pikachu, search} = this.state;
        return(
            <div className="background"><h1 className="title">PikaPie</h1>
                <Form.Control type="search" value={search} onChange={this.handleChange} placeholder="Normal text" />
                <PokeEntry title={pikachu.name} image={pikachu.sprites ? pikachu.sprites.front_default: ""}>
                {pikachu.abilities ? pikachu.abilities.map(obj => <p>{obj.ability.name}</p>) : ''}
                         
                </PokeEntry>
                <div></div>
            </div>
        );
    }
}

export default Home;