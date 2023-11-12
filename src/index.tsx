import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import { someFn } from "./test";

someFn(6);

// document.body.innerHTML = `<div>DEV SERVER is working</div>`;

import { render } from "react-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
