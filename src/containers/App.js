import React, {Component} from 'react';
// connecting Redux 
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// connecting Redux 
import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}
// 

class App extends Component {
	constructor(){
		super()
		// the state is what changes in an app
		this.state = {
			robots:[],
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>{this.setState({robots:users})})
	}

	// we manage the state in the render function
	render() {
		const { robots } = this.state;
		const {searchField, onSearchChange } = this.props;
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
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);