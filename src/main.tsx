import "./index.css";

import { App } from "./app.tsx";
import { render } from "preact";

const root = document.getElementById("app");

if (root) {
  render(<App />, root);
}
