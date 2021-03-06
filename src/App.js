import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import store from './app/store';
import { Provider } from 'react-redux';

import AppMenu from "./components/AppMenu";
import ScreenHeader from "./components/ScreenHeader";

import JogoDaVelhaScreen from "./screens/JogoDaVelha";
import TodoListScreen from "./screens/TodoList";

import { TodoProvider } from "./contexts/TodoContext";



function App() {
  return (
    <Provider store={store}>
      <TodoProvider>
      <BrowserRouter>
        <div className="min-h-full">
          <AppMenu />

          <main>
            <Routes>
              <Route path="/jogo_da_velha" element={<JogoDaVelhaScreen />} />
              <Route path="/todo_list" element={<TodoListScreen />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TodoProvider>
    </Provider>
    
  );
}

export default App;