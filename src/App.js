import './App.css';
import TodoContainer from './components/todoLogic';

function App() {
  return (
    <div className="App">
      <main className='to-do-list'>
        <h1>TODOS</h1>
        <div className='container'>
          <TodoContainer></TodoContainer>
        </div>
      </main>
    </div>
  );
}

export default App;