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
            <>
            <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map(habit => ( // habits컴포넌트에 연결을 해줌!
                        <Habit 
                        key={habit.id} // 기본적인 props key라는 것이 있다. 키 안에 habit안에있는 id를 지정해 주면된다.
                        habit={habit}
                        onIncrement={this.handleIncrement} // 내가 전달해준 handleIncrement를 호출
                        onDecrement={this.handleDecrement} // 내가 전달해준 handleIncrement를 호출
                        onDelete={this. handleDelete} // 내가 전달해준 handleIncrement를 호출
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default Habits;