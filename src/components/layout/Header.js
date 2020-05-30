import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header style={headerStyle}>
			<h1>To Do List</h1>
			<Link to='/' style={linkStyle}>
				Home
			</Link>{' '}
			|{' '}
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</header>
	);
}

const headerStyle = {
	textAlign: 'center',
	padding: '1rem',
	background: '#333',
	color: '#fff',
};

const linkStyle = {
	color: '#fff',
};
