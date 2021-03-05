import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component { // Habits이라는 컴포넌트를 만듬!
    handleIncrement = habit => {
        this.props.onIncrement(habit); // props에 전달된 onIncrement의 habit을 전달해준다.
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit); 
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return ( 
            <div className="habits">
            <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {this.props.habits.map(habit => ( // habits컴포넌트에 연결을 해줌!
                        <Habit 
                        key={habit.id} // 기본적인 props key라는 것이 있다. 키 안에 habit안에있는 id를 지정해 주면된다.
                        habit={habit}
                        name={habit.name}
                        count={habit.count}
                        onIncrement={this.props.onIncrement} // 내가 전달해준 handleIncrement를 호출
                        onDecrement={this.props.onDecrement} // 내가 전달해준 handleIncrement를 호출
                        onDelete={this.props.onDelete} // 내가 전달해준 handleIncrement를 호출
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </div>
        );
    }
}

export default Habits;