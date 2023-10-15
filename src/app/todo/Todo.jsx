'use client'
import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="todo-container text-center">
          <div className="todo-contain text-center">
            <h1 className="heading">TODO LIST</h1>
          </div>
          <div className="todoListMain text-center">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input
                  ref={(a) => (this._inputElement = a)}
                  placeholder="Enter Task"
                ></input>
                <button type="submit">ADD</button>
              </form>
              <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
