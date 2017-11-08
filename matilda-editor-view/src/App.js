import React, { Component } from 'react';
import './App.css';
import SearchTitle from './pages/SearchTitle'
import Display from './pages/Display'
import BookFilter from './pages/BookFilter'

class App extends Component {

constructor(props) {
  	super(props);
  	this.state = {
		results: []
	}
}
	updateResults(newResults){
   	this.setState({results: newResults})
 }

 	updateFilter(filter, value){
    console.log(filter, value)
 }

	render(){
  		return(
			<div>
				<p><SearchTitle onSearch = {this.updateResults.bind(this)}/></p>
				<Display books = {this.state.results} />
				<p><BookFilter /></p>

			</div>

  		)
	}
}


export default App;
