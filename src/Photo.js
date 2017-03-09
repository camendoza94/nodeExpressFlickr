import React, { Component } from 'react';
import './PhotoColumn.css';

class PhotoColumn extends Component{
	getUrl() {
		return "https://farm"+
		this.props.photo.farm +
		".staticflickr.com/" +
		this.props.photo.server +
		"/"+
		this.props.photo.id+
		"_" +
		this.props.photo.secret +
		"_s.jpg";
	}
	render(){
		return (
			<div>
		<img src={getUrl}/>
		</div>
		)
	}
}

export default PhotoColumn;