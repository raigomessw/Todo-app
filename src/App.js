
import TodoApp from './pages/TodoApp';
import Header from './Header';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
