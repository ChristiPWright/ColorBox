import React from 'react';
import './App.css';


  class App extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          color: 'white',
          colorArray: ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
        }
    }

//handleChange clicks through array 1 click=1 color; working put not the prompt
 handleChange = () => {
    let newColor 
    let colorArray = ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
    if (colorArray.indexOf(this.state.color) === 6){
      newColor = colorArray[0]
    } else {
      newColor = colorArray[colorArray.indexOf(this.state.color)+1]
    }
     return this.setState({color: newColor})
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to the World of Color!</h2>
          <h4>Click the below square to discover colors.</h4>
          <button 
            style = {{backgroundColor: this.state.color}} 
            onClick = {this.handleChange}
          >
            {this.state.color}
          </button>
        </header>
      </div>
    );
  }//render end 
} //ends calss component

export default App;
