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
		this.setState({tags: event.target.value.replace(/ /g,",")});
	}

	search() {
		this.props.queryFlickr(this.state.term, this.state.tags);
	}

	render() {
		return(
			<div className="search center">
			<input id="search" className="center-block" type="text" placeholder="Enter keyword(s) here" onKeyPress={this._handleKeyPress.bind(this)} value={this.state.term} onChange={this.handleChange.bind(this)}/>
			<input id="tags" type="text" placeholder="Enter tag(s) here" onKeyPress={this._handleKeyPress.bind(this)} value={this.state.tags} onChange={this.handleChangeTags.bind(this)}/>
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