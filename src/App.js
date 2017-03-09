import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import PhotoColumn from './PhotoColumn';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      photos: [] //Hacer uno por cada color
    };
  }

  queryFlickr(query) {
    fetch('/flickr/' + query)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(function(data) {
      console.log("Gotit!");
      this.setState({ //Cambiar a un callback
        photos: data.photos
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }
  render() {
    return (
      <div>
      <Search queryFlickr={this.queryFlickr} />
      <PhotoColumn photos={this.state.photos}/>
      </div>
      )
    
  }
}

  export default App;
