import React, { Component } from 'react';
import Photo from './Photo';

class PhotoColumn extends Component{
	render(){
		if(this.props.photos.photo) {
			return(
				<div className="col-md-1 col-sm-2 col-xs-3 column">
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