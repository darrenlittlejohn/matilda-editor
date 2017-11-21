import React, { Component } from 'react';

class BookDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      text: ''
    };
  }

show (){
    this.setState({
      editing: true
    })
}

hide (){
  var val = this.refs.newText.value;
  this.setState({
    text: val,
    editing: false
  })
}
onclick(e){
  e.preventDefault();
  this.setState({editing:
  !this.state.editing})
}
  render () {

  let book = this.props.book
  let lexile = book.lexile_score
  if (lexile == null){
  	lexile= 'no information'
  }
  let variety= book.text_variety
  if (variety == null){
  	variety= 'no information'
  }
  if (this.state.editing) {
    var change = (
      <div>
      <textarea ref="newText" defaultValue={lexile}/>
      <button onClick={this.hide.bind(this)}>Save</button>
      </div>
    )

  }

    return (
			<div className="Display">
        {change}
				<p>Title: {book.title}</p>
				<p>Author: {book.author_full_name}</p>
				<p>Lexile: {lexile}</p>
				<p>Text Variety: {variety}</p>
				<img src={book.cover_url} />
        <button onClick={this.show.bind(this)}>Edit</button>
			</div>

		)
  }
}

export default BookDisplay
