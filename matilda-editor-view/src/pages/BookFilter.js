import React, { Component } from 'react'
require('../bookFilter.css')

class BookFilter extends Component {
	  	render(){
		    return(
				<div>
					<form onSubmit>
						<h3>Title Filter</h3>

						<label>
							<input type='checkbox' name='Lexile' checked/>Lexile
						</label>

						<label>
							<input type='checkbox'name='No Lexile' checked />
						No Lexile
						</label>

						<label>
							<input type='checkbox' name='Lexile' checked/>Cover
						</label>

						<label>
							<input type='checkbox'name='No Lexile' checked /> No Cover
						</label>


						<label>
						<br />
							<input type='checkbox' name='Lexile' checked/>Text Variable
						</label>

						<label>
						 <br />
							<input type='checkbox'name='No Lexile' checked />
						No Text Variable
						</label>

						<br />
						<input type='submit' value='Submit' />
					</form>
				 </div>
		)}
}

export default BookFilter
