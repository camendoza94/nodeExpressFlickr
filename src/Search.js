import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
	onstructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	buscar(termino) {
		this.setState({term: termino});
		this.props.querFlickr(termino);
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