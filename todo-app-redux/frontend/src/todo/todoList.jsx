import React from "react";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux';

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
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            style="warning text-white"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.handleRemove(todo)}
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

export default connect(mapStateToProps)(TodoList);