import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
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
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length ? 
			(
				<div className='tc f1'>
				<h1>Loading</h1>
				</div>
			)
			: 
			(
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

export default App;