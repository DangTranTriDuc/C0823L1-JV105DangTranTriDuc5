import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  handleAddItem = () => {
    if (this.state.item.trim()) {
      this.setState((state) => ({
        list: [...state.list, state.item],
        item: ''
      }));
    }
  }
    // list: [...state.list, state.item]: Đây là cách sử dụng cú pháp spread operator (...) để tạo một mảng mới. Mảng mới này bao gồm tất cả các phần tử của mảng list hiện tại và thêm phần tử item mới vào cuối.
    //      state.list: Mảng hiện tại trong state.
    //      state.item: Mục mới cần thêm vào mảng.
    // item: '': Sau khi thêm mục mới vào mảng list, item được đặt lại thành chuỗi rỗng (''), chuẩn bị cho lần nhập tiếp theo của người dùng.

  render() {
    return (
        <div>
          <h1>Todoo list</h1>
          <input
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
          />
          <button onClick={this.handleAddItem}>Add</button>
          <ul>
            {this.state.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    );
  }
}

export default App;

