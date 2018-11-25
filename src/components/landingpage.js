import React, { Component } from 'react';
import image from './construction.jpg';

class Landing extends Component{
	render() {
		return(
			<div class="header">
				<div>
					<img href="/" src={image} alt="logo" style={{height:'665px', width:'1520px'}} />		        
				</div>
			</div>

		)
	}
}

export default Landing;