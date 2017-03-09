import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import PhotoColumn from './PhotoColumn';

class App extends Component {

  constructor(props) {
    super(props);
    this.colors=["red","orange", "yellow", "green", "blue","indigo", "violet" ];
    this.state = {
      red: [],
      orange: [],
      yellow: [],
      green: [],
      blue: [],
      indigo: [],
      violet: []
    };
  }

  queryFlickr(query) {
    var i = 0;
    for (const color of this.colors) {
      fetch('/flickr/' + query + ',' + color)
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log("Got it!");
        var newState = {};
        newState[color] = data.photos;
        this.setState(newState);
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      i++;
    }
  }
  render() {
   var columns = [];
   for (const color of this.colors) {
    columns.push(<PhotoColumn photos={this.state[color]} />);
  }
  return (
  <div>
  <Search queryFlickr={this.queryFlickr.bind(this)} />
  {columns}
  </div>
  )

}
}

export default App;
