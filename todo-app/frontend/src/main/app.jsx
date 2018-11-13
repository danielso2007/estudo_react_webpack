import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/bootstrap/dist/css/bootstrap-reboot.min.css";
import "modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "modules/bootstrap/dist/js/bootstrap.min.js";
import "modules/font-awesome/css/font-awesome.min.css";
import "../template/custom.css";
import Menu from "../template/menu";
import React from "react";

import Routes from "./routes";

export default props => (
  <div>
    <Menu />
    <div className="container">
      <Routes />
    </div>
  </div>
);
