import React, { Component } from 'react';


class Display extends Component {

	render() {

	var data = this.props.books
	var resultDisplay = data.map( (book,key)=>{
	let lexile = book.lexile_score
	if (lexile == null){
		lexile= 'no information'
	}
	let variety= book.text_variety
	if (variety == null){
		variety= 'no information'
	}
		return (
			<div className="Display">
				<p>Title: {book.title}</p>
				<p>Author: {book.author_full_name}</p>
				<p>Lexile: {lexile}</p>
				<p>Text Variety: {variety}</p>
				<img src={book.cover_url} />
			</div>
		)
	}
	)
	return (
		<div>
			{resultDisplay}
		</div>
	)
}
	}

export default Display
