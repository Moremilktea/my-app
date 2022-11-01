import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 100,
        }
    }

    clickMe() {
        this.setState ({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining -1
        })
    }

    render(){
      return (
        <div>
        <h2 onClick={() => this.clickMe()}>
            Hello from {this.props.name}
        </h2>
        <span>{this.state.clicks} is the number of clicks. {this.state.totalRemaining}</span> 
        </div>  
      )
    }
  }

export default Item;

{/* <img src={logo} className="App-logo" alt="logo" />
          <Item name = 'Diego'/>
          <Item name = 'Coco'/>
        <a
          className="App-link" 
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer" 
         > 
          Learn React Now 
        </a>  */}