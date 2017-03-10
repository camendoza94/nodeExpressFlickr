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
			<div> 
			<input type="text" value={this.state.term} onChange={this.handleChange.bind(this)}/>
			<button type="button" onClick={this.search.bind(this)}>
			<span className="glyphicon glyphicon-search"></span>
			</button>
			</div>
			)
	}
}

export default Search;