import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";


ReactDOM.render(
<div>
    <Family lastName="Silva">
        <Member name="Guilhemer"></Member>
        <Member name="Júlia"></Member>
        <Member name="Maria"></Member>
    </Family>
</div>,
document.getElementById("app"));
