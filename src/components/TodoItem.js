import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyleClass = () => {
		const { category } = this.props.todo;
		if (category === 'vegetable') return 'todo-v';
		else if (category === 'dairy') return 'todo-d';
		else if (category === 'fruit') return 'todo-fu';
		else if (category === 'meatFish') return 'todo-m';
		else if (category === 'bread') return 'todo-b';
		else if (category === 'frozen') return 'todo-fz';
		else {
			return 'todo';
		}
	};

	getChecked = () => {
		const { completed } = this.props.todo;
		return completed ? 'checked' : 'notChecked';
	};

	getCategory = () => {
		// https://www.npmjs.com/package/emoji-dictionary
		const emoji = require('emoji-dictionary');
		const cat = this.props.todo.category;
		if (cat === 'vegetable') {
			return emoji.getUnicode('carrot');
		} else if (cat === 'meatFish') {
			return emoji.getUnicode('poultry_leg');
		} else if (cat === 'fruit') {
			return emoji.getUnicode('apple');
		} else if (cat === 'dairy') {
			return emoji.getUnicode('milk_glass');
		} else if (cat === 'bread') {
			return emoji.getUnicode('bread');
		} else if (cat === 'frozen') {
			return emoji.getUnicode('snowflake');
		} else {
			return '';
		}
	};

	render() {
		const { title, id } = this.props.todo;
		return (
			<div className={`${this.getStyleClass()} ${this.getChecked()}`}>
				<p>
					<input
						type='checkbox'
						onChange={this.props.markComplete.bind(this, id)}
					/>
					{title} {this.getCategory()}
					<button
						className='del-btn'
						onClick={this.props.delTodo.bind(this, id)}
					>
						x
					</button>
				</p>
			</div>
		);
	}
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
