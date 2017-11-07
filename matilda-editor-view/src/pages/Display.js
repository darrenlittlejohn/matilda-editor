import React, { Component } from 'react';


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
