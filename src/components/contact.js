import React, { Component } from 'react';
import { Grid, Cell, Navigation, Layout, Header } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';

class Contact extends Component{
	render() {
		return(
			<div className="firstNav">
				<Layout>
					<Header>
						<Navigation className="firstNav">
						  
						  <Link to="/experience">Experience Centers</Link>
						  <Link to="/write">Write to Us</Link>
						</Navigation>
					</Header>
				</Layout>
			</div>
		)
	}
}

export default Contact;