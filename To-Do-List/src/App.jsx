import styled from 'styled-components';
import { myTodos } from './data/todos';
import { useState } from 'react';
import { List } from './Comps/List'

function App() {
  const [todos, setTodos] = useState(myTodos)
  return (
    <appStyled className="App">
      <form action="" className="form">
        <h1>Today's Tasks</h1>
        <div className="input-container">
          <input type="text" placeholder="Add a Task" />
          <div className="submit-button">
            <button>+ Add Todo</button>
          </div>
        </div>
      </form>

      <ul className="todos-container">
        {
          todos.map((todo)) => {
            const{id, name, completed} = todo
            return <List key={id} name={name} completed={completed} />
          }
        }
      </ul>
    </appStyled>
  );
}

const appStyled = styled.div`

`;

export default App
