
//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Item from './Myitem';

class FilmItemRow extends React.Component {
  render() {
    return(
    <li>
      <a target="_blank" rel="noreferrer" href={this.props.url}>{this.props.url}</a>
    </li>)
  }
}
class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null, 
      films: [],
    }
  }
  getNewcharacter() {
    //console.log("Get new character from a but/"
    const randomNumber = Math.round(Math.random()* 82)
    const url = `https://swapi.dev/api/people/${randomNumber}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState ({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
    
    })
  })
}
  render() {

    const movies = this.state.films.map((film, i) => {
      return <FilmItemRow key={i} url ={film}/>

    })
    return (

      <div>
        { 
          this.state.loadedCharacter &&       
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p><a href={this.state.homeworld} target="_blank" rel="noreferrer">Homeworld</a></p>
            <ul> 
              {
                movies
              }
                              
             </ul>
          </div> 
  }
          <button type="button" onClick={() => this.getNewcharacter()}
          className="btn">
            Randomize Characters</button>
      </div>
      
    )

  }  
}

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <StarWars />
      </header> 
    </div>
  );
}

export default App;


