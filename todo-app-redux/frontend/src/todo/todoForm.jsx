import React, { Component } from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, add, clear } from "./todoAction";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { add, search, description } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      this.props.clear();
    }
  }

  componentDidMount() {
    this.props.search();
  }

  render() {
    const { add, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 7 9">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa..."
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>
        <Grid cols="12 5 3">
          <IconButton style="primary" icon="plus" onClick={ () => add(description) } />
          <IconButton style="info" icon="search" onClick={ () => search(description) } />
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.clear}
          />
        </Grid>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
