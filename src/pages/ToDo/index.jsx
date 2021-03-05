import * as React from 'react';
import { connect } from 'react-redux';
import {
  todoGetAll,
  todoCreate,
  todoUpdate,
  todoDelete,
  selectToDoList,
} from '../../core/store/todo';
import { selectToDoIsLoading } from '../../core/store/todo';
import { Preloader } from '../../components/Preloader';
import { TodoList } from './components/TodoList';


class ToDoListImpl extends React.Component {
  state = {
    filter: null,
  };

  componentDidMount() {
    this.props.getAllRecords();
  }

  render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }

    return (
      <div>
        <TodoList list={this.props.records} />
      </div>
    );
  }
}

const mapState = state => ({
  isLoading: selectToDoIsLoading(state),
  records: selectToDoList(state),
});

const mapDispatch = {
  getAllRecords: todoGetAll,
  addRecord: todoCreate,
  updateRecord: todoUpdate,
  deleteRecord: todoDelete,
};

export default connect(mapState, mapDispatch)(ToDoListImpl);
