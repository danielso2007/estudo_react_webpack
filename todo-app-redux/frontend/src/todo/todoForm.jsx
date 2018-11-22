import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux';

const TodoForm = props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
    <div className="row">
      <Grid cols="12 7 9">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa..."
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        />
      </Grid>
      <Grid cols="12 5 3">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton style="info" icon="search" onClick={props.handleSearch} />
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ description: state.todo.description });

export default connect(mapStateToProps)(TodoForm);