import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	state = {
		title: '',
		category: '',
	};

	onChange = (e) => {
		return this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title, this.state.category);
		this.setState({ title: '', category: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className='main-form'>
				<input
					type='text'
					name='title'
					placeholder='Add Grocery Item...'
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					onChange={this.onChange}
					className='input-box'
				/>
				<select
					name='category'
					id='category'
					value={this.state.category}
					onChange={this.onChange}
					style={{ flex: '3' }}
					className='select-box'
				>
					<option value='' disabled selected>
						Select your option
					</option>
					<option value='fruit'>Fruit</option>
					<option value='vegetable'>Vegetable</option>
					<option value='meatFish'>Meat & Fish</option>
					<option value='dairy'>Dairy</option>
					<option value='bread'>Bread</option>
					<option value='frozen'>Frozen</option>
					<option value='other'>Other</option>
				</select>
				<input
					type='submit'
					value='Submit'
					className='btn'
					style={{ flex: '2' }}
				/>
			</form>
		);
	}
}

//PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
