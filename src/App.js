import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numClicks: 0
    }
  }

  handleClick = () => (
    this.setState({
      numClicks: this.state.numClicks + 1
    })
  )
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Number of times pressed: {this.state.numClicks}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello there!
          </a>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}>
            Click me!
          </Button>
        </header>
      </div >
    );
  }
}

export default App;
