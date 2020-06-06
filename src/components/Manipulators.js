import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Manipulators extends Component {
	clearAll = () => {
		this.props.clearAllItems();
		console.log('Clearing in man');
	};

	render() {
		return (
			<div class='flex-row'>
				<input
					onClick={this.props.clearAll}
					type='submit'
					defaultValue='ClearAll'
					className='btn btn-clear'
				/>
			</div>
		);
	}
}

export default Manipulators;
