import React from 'react';
import dotenv from 'dotenv';
import Mapboxmap from './component/Mapboxmap'

class App extends React.Component {
  constructor(){
    super();
    dotenv.config();
    this.state = {
      message: 'Hola mundo!',
      follow: false
    };
    
  }

  onClickEvent = (e) => {
    e.preventDefault();
    this.setState({
      message: this.state.message,
      follow: !this.state.follow
    })
  };

  render(){
    return (
      <div className="App">
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className='container'>
            <span className="navbar-brand mb-0 h1">MotoTrackerSOS</span>
          </div>
        </nav>
        <div className='container'>
          <h2>{this.state.message}</h2>
          <small>Estamos trackeando? {this.state.follow?'Si!':'NO!'}</small>
          <form>
            <button className='btn btn-warning' onClick={(event) => this.onClickEvent(event)}>Trackear</button>
          </form>
          <div id='mapabueno'></div>
          
        </div>
      </div>
    );
  }
}

export default App;
