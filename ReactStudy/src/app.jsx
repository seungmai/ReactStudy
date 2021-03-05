import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

// function App() {
//   return <Habits />; //안에 또 다른 자식태그가 없다면 보이는 것과 같이 바로 닫아주기만해도 된다.
// }

class App extends Component {
  state = { /*state는 컴포넌트에서 가지고 있는 데이터를 말한다. */
    habits: [ // state 안에는 habits이라는 습관들을 담고 있는 배열의 데이터를 가지고 있다.
        { id: 1, name: 'Reading', count: 0 }, // 자식컴포넌트가 있으면 고유한 키를 가지고 있어야한다. 이 말은 각각의 컴포넌트에 id를 부여함으로써 아이디가 동일하다면 이 자식 요소가 변경되어진 것이 아니기 때문에 즉 나중에 다른 자식요소가 추가되거나 위치가 변경이 되어도 아이디가 동일하다면 리액트가 조금 더 성능개선을 위해서 불필요한 다시 렌더링을 하지 않는다던지 조금 성능을 아이디를 이용해서 계산한다. 그래서 이 리스트 안에서 쓰이는 자식 컴포넌트에게 아이디를 부여하는 것이 굉장이 중요하다.
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
  };

  // handleIncrement = habit => { // 증가하는 로직(어떤 습관을 증가할 건지 habit을 받아와야한다.)
  //   const habits = [...this.state.habits]; // habits라는 배열 안에 있는 아이템들을 하나하나씩 새로운 배열 안으로 복사해 오는 것을 말한다.
  //   const index = habits.indexOf(habit); // habits의 몇 번째 인덱스에 있는지 찾을 수 있는 indexOf라는 배열의 API를 이용해서 몇번 째 인덱스에 있는지 확인을 한다.
  //   habits[index].count++; // habits의 배열에 해당하는 이 오브젝트에 있는 count를 증가해준다.
  //   this.setState({ habits: habits }); // 리액트에서 제공하는 setState API를 호출하고 동일하게 새로운 오브젝트를 만든다. key는 habits, 실제로 들어가는 배열은 위에서 만든 로컬변수인 habits이다. key와 value가 동일한 이름을 가지고 있는 경우에는 하나로 생략이 가능하다(habits: habits <= 이건 생략안함!)
  // };

  handleIncrement = habit => { // 증가하는 로직(어떤 습관을 증가할 건지 habit을 받아와야한다.)
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    })
    this.setState({ habits: habits }); // 리액트에서 제공하는 setState API를 호출하고 동일하게 새로운 오브젝트를 만든다. key는 habits, 실제로 들어가는 배열은 위에서 만든 로컬변수인 habits이다. key와 value가 동일한 이름을 가지고 있는 경우에는 하나로 생략이 가능하다(habits: habits <= 이건 생략안함!)
  };

  // handleDecrement = habit => { // 감소하는 로직(어떤 습관을 감소할 건지 habit을 받아와야한다.)
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   const count = habits[index].count - 1;
  //   habits[index].count = count < 0 ? 0 : count;
  //   this.setState({ habits });
  // };

  handleDecrement = habit => { // 감소하는 로직(어떤 습관을 감소할 건지 habit을 받아와야한다.)
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0? 0 : count };
      }
      return item;
    })
    this.setState({ habits: habits }); // 리액트에서 제공하는 setState API를 호출하고 동일하게 새로운 오브젝트를 만든다. key는 habits, 실제로 들어가는 배열은 위에서 만든 로컬변수인 habits이다. key와 value가 동일한 이름을 가지고 있는 경우에는 하나로 생략이 가능하다(habits: habits <= 이건 생략안함!)
  };

  handleDelete = habit => { // 삭제하는 로직(어떤 습관을 삭제할 건지 habit을 받아와야한다.)
    const habits = this.state.habits.filter(item => item.id !== habit.id); // 새로운 로컬변수인 habits을 만들어서 this.state에 있는 habits을 빙글빙글 돌면서 아이템을 전달받아서 배열에 있는 아이템의 아이디가 우리가 삭제하고자 하는 함수인자로 전달받은 habit의 id가 동일하지 않는 아이들만 쏙쏙 뽑아다가 배열을 만들 것이다.
    this.setState({ habits }); // 전체적으로 업데이트
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]; // 기존에 있는 state에 있는 habit을 하나하나씩 이것을 ...을 spread operator이라고 부르는데 이렇게하게되면 habits에 있는 아이템들을 하나하나씩 새로운 배열에 복사해오는 것이다. 그리고 주어진 이름을 이용해서 새로운 habit도 만들어야 한다. 그래서 아이디는 고유한 아이들을 써야 되는데 기존에 있는 아이디 값은 1, 2, 3이라고 정했지만 이제 새로 만드는 것은 고유한 아이디를 해야 되기때문에 일단 간단하게 우리가 지금 Date.now()을 이용하면 현재 날짜와 시간을 합해서 초까지 만들어 주는 것이다. 이것으로 고유한 아이들을 만들고 이름은 주어진 이름을 이용하고 count:0 그리고 동일한 이름일 때는 생략이 가능하다.
    this.setState({ habits }); 
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
     if(habit.count !== 0 ) {
      return { ...habit, count: 0 };
     }
     return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
     <>
     <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length}/>
         <Habits 
        habits={this.state.habits} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this. handleDelete} 
        onAdd={this.handleAdd}
        onReset={this.handleReset}
      />
     </>
    );
  }
}

export default App;


