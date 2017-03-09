import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import PhotoColumn from './PhotoColumn';
const ROOT_URL = "http://localhost:9000";

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      photos: []
    };
  }

  querFlickr(quer) {
    fetch('/flickr/' + query)
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(function(data) {
      console.log("Gotit!");
      this.setState({
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
      <Search querFlickr={this.querFlickr} />
      <PhotoColumn photos={this.state.photos}/>
      </div>
      )
    }

    export default App;
