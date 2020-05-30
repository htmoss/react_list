import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='main-header'>
			<h1>Grocery List</h1>
			<Link to='/' className='link-style'>
				Home
			</Link>{' '}
			|{' '}
			<Link to='/about' className='link-style'>
				About
			</Link>
		</header>
	);
}
