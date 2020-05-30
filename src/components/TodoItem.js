import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		const { completed } = this.props.todo;
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px dotted #ccc',
			textDecoration: completed ? 'line-through' : 'none',
		};
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
			<div style={this.getStyle()}>
				<p>
					<input
						type='checkbox'
						onChange={this.props.markComplete.bind(this, id)}
					/>
					{title} {this.getCategory()}
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
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

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '4px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
};

export default TodoItem;
