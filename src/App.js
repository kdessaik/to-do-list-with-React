import logo from './logo.svg';
import './App.css';
import NavBar from './Header/Navbar';
import ToDoList from './Body/ToDoList.js'
import Display1 from './Body/Todolist2';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ToDoList/>
      
      
    </div>
  );
}

export default App;
