import React, { Component } from 'react';
import './PhotoColumn.css';

class PhotoColumn extends Component{
	render(){
		if(this.props.photos) {
			return(
				<div className="col-md-2">
				{this.props.photos.map((photo, index) => {
						return <Photo photo={photo}/>
				})};
				</div>
				)
			}
		}
	}
}

export default PhotoColumn;