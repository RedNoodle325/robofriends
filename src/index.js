import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // it means same directory
import "tachyons";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

