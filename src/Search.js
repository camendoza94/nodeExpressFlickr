import React, { Component } from 'react';

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	handleChange(event) {
		this.setState({term: event.target.value});
	}

	search() {
		this.props.queryFlickr(this.state.term);
	}

	render() {
		return(
			<div className="search center"> 
			<input type="text" onKeyPress={this._handleKeyPress.bind(this)} value={this.state.term} onChange={this.handleChange.bind(this)}/>
			<button type="button" onClick={this.search.bind(this)}>
			<span className="glyphicon glyphicon-search"></span>
			</button>
			</div>
			)
	}

	_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  }
}

export default Search;