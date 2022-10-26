// import { MDCRipple } from '@material/ripple/index';
import '@material/mwc-button';
import { MDCTopAppBar } from '@material/top-app-bar';

import './components/Pink.js';
import './components/Orange.js';
import './components/Children.js';

// Material
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Navigation
document.getElementById('return').addEventListener('click', () => {
	window.location.href = '../';
});

// Move Children from containers

let containerToggle = false;
document.getElementById('move').addEventListener('click', (e) => {
	const containerColor = containerToggle ? 'orange' : 'pink';
	containerToggle = !containerToggle;
	const containerElement = document.querySelector(
		`${containerColor}-container`
	);
	containerElement.appendChild(document.querySelector('children-element'));
});
