import React from "react";

export default props => (
  // <header className="page-header">
  //   <h2>
  //     {props.name} <small>{props.small}</small>
  //   </h2>
  // </header>
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-5 border-bottom">
    <h2>{props.name} <span className='small_page_haeader'>{props.small}</span></h2>
  </div>
);
