import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
	constructor(){
		super()
		// the state is what changes in an app
		this.state = {
			robots:[],
			searchField:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>{this.setState({robots:users})})
		
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}
	// we manage the state in the render function
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return(
				<div className='tc'>
				<h1 className='f1'>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
				</div>
			);
		}
	}
}

export default App;