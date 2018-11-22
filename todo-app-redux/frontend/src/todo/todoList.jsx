import React from "react";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoAction";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone align-middle" : "align-middle"}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            style="warning text-white"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.markAsPending(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.remove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-responsive-sm">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);