import React from "react";

class AddTodo extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.content !== "") {
      e.preventDefault();

      this.props.addTodo(this.state);
      this.setState({
        content: ""
      });
    } else {
      e.preventDefault();

      console.log(e.preventDefault());
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>

          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
