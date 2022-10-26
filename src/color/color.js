// import { MDCRipple } from '@material/ripple/index';
import '@material/mwc-button';

import './components/Pink.js';
import './components/Orange.js';
import './components/Children.js';

let containerToggle = false;
document.getElementById('move').addEventListener('click', (e) => {
	const containerColor = containerToggle ? 'orange' : 'pink';
	containerToggle = !containerToggle;
	const containerElement = document.querySelector(
		`${containerColor}-container`
	);
	containerElement.appendChild(document.querySelector('children-element'));
});
