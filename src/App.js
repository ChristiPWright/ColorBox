import React from 'react';
import './App.css';

///currently not looping correctly - index is not changing
  class App extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          color: 'white',
          colorArray: ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
        }
    }

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
  
  // return in the for loop returns arr[0] and after arr[-1]
  arrayChange = () => {
    let colorArray = ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
    colorArray.forEach(element => element)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to the World of Color!</h2>
          <h4>Click the below square to discover colors.</h4>
          <button 
            style = {{backgroundColor: this.state.color}} 
            onClick = {this.arrayChange}
          >
            {this.state.color}
          </button>
        </header>
      </div>
    );
  }//render end 
} //ends calss component

export default App;
