import React, { Component } from 'react';

class Photo extends Component{
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
		<img src={this.getUrl()}/>
		</div>
		)
	}
}

export default Photo;