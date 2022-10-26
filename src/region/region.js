import { MDCRipple } from "@material/ripple";
import { MDCList } from "@material/list";

import "./components/USRegion.js";
import "./components/EURegion.js";
import "./components/Product.js";
import "./components/RegionProductManagement.js";
import "./components/ProductList.js";

document.addEventListener("DOMContentLoaded", (event) => {
  const list = new MDCList(document.querySelector(".mdc-deprecated-list"));

  const listItemRipples = list.listElements.map(
    (listItemEl) => new MDCRipple(listItemEl)
  );
});
