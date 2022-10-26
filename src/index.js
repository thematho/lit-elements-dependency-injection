import '@material/mwc-button';
import { MDCTopAppBar } from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

document.getElementById('return').addEventListener('click', () => {
	window.location.href = '../';
});
