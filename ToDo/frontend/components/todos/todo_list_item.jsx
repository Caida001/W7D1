import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    // debugger 
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo.title}
        </li>
      </div>
    );
  }
}

export default TodoListItem;
