import {FilterProvider} from "./contexts/FilterContext";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  return (
      <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
      </FilterProvider>
  );
}

export default App;
