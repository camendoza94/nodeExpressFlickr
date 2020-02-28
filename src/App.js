import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import PhotoColumn from './PhotoColumn';

class App extends Component {

    constructor(props) {
        super(props);
        this.colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b"];
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
            9: [],
            a: [],
            b: []
        };
    }

    queryFlickr(query, tags) {
        for (const color of this.colors) {
            fetch('/flickr/' + query + '?tags=' + tags + '&color_codes=' + color)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    console.log("Got it!");
                    let newState = {};
                    newState[color] = JSON.parse(data.text).photos;
                    this.setState(newState);
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                });
        }
    }

    render() {
        let columns = [];
        for (const color of this.colors) {
            columns.push(<PhotoColumn photos={this.state[color]}/>);
        }
        return (
            <div>
                <div className="col-lg-12">
                    <h1 className="page-header center">Flickr Rainbow</h1>
                </div>
                <Search queryFlickr={this.queryFlickr.bind(this)}/>
                <div className="col-lg-1 col-md-1">
                </div>
                <div className="col-lg-12">
                    {columns}
                </div>
                <div className="col-lg-1 col-md-1">
                </div>
            </div>
        )
    }
}

export default App;
