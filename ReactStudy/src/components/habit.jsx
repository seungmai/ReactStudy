import React, { Component } from 'react';

class Habit extends Component {
    // state = { // Habit이라는 class안에는 state라는 멤버변수가 있는데 그 변수는 오브젝트이다.
    //     count: 0, // 그 오브젝트 안에는 count라는 데이터가 있다.
    // }; 우리가 부모 컴포넌트로부터 전달받은 props으로 전달받은 습관의 데이터를 보여주기만 하는 컴포넌트이기 때문에 이 컴포넌트 안에 자체적으로 state를 가지고 있을 필요는 전혀 없다.

//   handleIncrement = () => {
//       this.setState({count: this.state.count + 1}) // 새로운 오브젝트 설정하려면 setState를 사용!
//   } // handleIncrement는 이 멤버변수는 arrow function을 가리킨다.

//   handleDecrement = () => {
//       const count = this.state.count - 1
//     this.setState({count: count < 0 ? 0 : count}) // 새로운 오브젝트 설정하려면 setState를 사용!
// } // handleDecrement는 이 멤버변수는 arrow function을 가리킨다.

handleIncrement = () => {
    this.props.onIncrement(this.props.habit); 
}

handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
}

handleDelete = () => {
    this.props.onDelete(this.props.habit);
}

  render() {
      const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
