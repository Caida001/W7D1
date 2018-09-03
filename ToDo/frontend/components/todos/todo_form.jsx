import { uniqueId } from './../../util/util';
import React from 'react';


class TodoForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
  }


  render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            value={this.props.title}
            />
        </label>
        <label>Body:
          <textarea
            rows="8"
            cols="80"
          ></textarea>
        </label>
        <button>Create Todo!</button>
      </form>
    );
  }

}

export default TodoForm;
