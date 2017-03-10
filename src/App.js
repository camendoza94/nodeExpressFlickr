import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import PhotoColumn from './PhotoColumn';

class App extends Component {

  constructor(props) {
    //CAmbiar los colores
    super(props);
    this.colors=[0,1,2,3,4,5,6,7,8,9];
    this.state = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    };
  }

  queryFlickr(query) {
    for (const color of this.colors) {
      fetch('/flickr/' + query + '?color_codes=' + color)
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
