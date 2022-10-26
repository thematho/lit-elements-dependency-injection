import '@material/mwc-button';
import { MDCRipple } from "@material/ripple";
import { MDCList } from "@material/list";
import { MDCTopAppBar } from '@material/top-app-bar';

import "./components/USRegion.js";
import "./components/EURegion.js";
import "./components/Product.js";
import "./components/RegionProductManagement.js";
import "./components/ProductList.js";

// Material
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Navigation
document.getElementById('return').addEventListener('click', () => {
	window.location.href = '../';
});


document.addEventListener("DOMContentLoaded", (event) => {
  const list = new MDCList(document.querySelector(".mdc-deprecated-list"));

  const listItemRipples = list.listElements.map(
    (listItemEl) => new MDCRipple(listItemEl)
  );
});
