import React, { Component } from 'react';

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			tags: ''
		};
	}

	handleChange(event) {
		this.setState({term: event.target.value});
	}

	handleChangeTags(event) {
		this.setState({tags: event.target.value});
	}

	search() {
		this.props.queryFlickr(this.state.term, this.state.tags);
	}

	render() {
		return(
			<div className="search center"> 
			<span>Keyword:</span>
			<input id="search" type="text" onKeyPress={this._handleKeyPress.bind(this)} value={this.state.term} onChange={this.handleChange.bind(this)}/>
			<span>Tags:</span>
			<input id="tags" type="text" onKeyPress={this._handleKeyPress.bind(this)} value={this.state.tags} onChange={this.handleChangeTags.bind(this)}/>
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