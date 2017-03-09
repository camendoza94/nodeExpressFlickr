import React, { Component } from 'react';
import Photo from './Photo';

class PhotoColumn extends Component{
	render(){
		if(this.props.photos.photo) {
			return(
				<div className="col-md-2 column">
				{this.props.photos.photo.map((photo) => {
					return <Photo photo={photo}/>
				})}
				</div>
				)
		}
		else {
			return(
				<div></div>
				)
		}
	}
}
export default PhotoColumn;