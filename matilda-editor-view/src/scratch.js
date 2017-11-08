
	constructor(props) {
	  	super(props);
	  	this.state = {
            searchText: '',
		}


		import {FormGroup, FormControl, formInstance, mountNode} from 'react-bootstrap'


//refactoring of Components

import React, { Component } from 'react';

const Display = (props) => (
	<div>
		{props.books.searchDisplay.length}
	</div>
)

class Display extends Component {
	render(){
		const searchDisplay = this.props.books
    	return(
      		<div>
				{searchDisplay.length}
      		</div>
		)
	}
}

export default Display
