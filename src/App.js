import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

import './App.css';
import Manipulators from './components/Manipulators';

class App extends Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: ' Carrots',
				category: 'vegetable',
				checked: false,
			},
			{
				id: uuidv4(),
				title: ' Milk',
				category: 'dairy',
				checked: false,
			},
			{
				id: uuidv4(),
				title: ' Chicken',
				category: 'meatFish',
				checked: false,
			},
		],
	};

	// componentDidMount() {
	// 	axios
	// 		.get('https://jsonplaceholder.typicode.com/todos?_limit=20/')
	// 		.then((res) => this.setState({ todos: res.data }))
	// 		.catch(console.log('failed'));
	// }

	//toggle checkbox
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					//toggling the todo 'completed'
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	//delete todo
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	// Add todo
	addTodo = (title, category) => {
		const newTodo = {
			id: uuidv4(),
			title: ' ' + title,
			category,
			completed: false,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	clearAllItems = () => {
		console.log('Clearing!');
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										className='todo-list'
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
									<Manipulators />
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
