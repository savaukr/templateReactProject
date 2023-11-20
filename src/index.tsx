import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider/ui/index";
import App from "./app/App";

import { someFn } from "./test";

someFn(6);

// document.body.innerHTML = `<div>DEV SERVER is working</div>`;

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
