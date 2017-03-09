import React, { Component } from 'react';

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	buscar(termino) {
		this.setState({term: termino});
		this.props.queryFlickr(termino);
	}


	render() {
		return(
			<div> 
			<input type="text" onChange={(event) => this.buscar(event.target.value)}/>
			</div>
			)
	}
}

export default Search;