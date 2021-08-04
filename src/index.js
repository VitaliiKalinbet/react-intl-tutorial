import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "flag-icon-css/css/flag-icon.min.css";

const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading...</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
