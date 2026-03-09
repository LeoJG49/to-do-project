import './App.css';
import Form from './components/form';
import TextList from './components/textList';

function App() {
  return (
    <div className="App">
      <main className='to-do-list'>
        <h1>TODOS</h1>
        <div className='container'>
          <Form></Form>
        </div>
        <div className='text-todo-container'>
        </div>
      </main>
    </div>
  );
}
//TODO: The app reloads when we try to add a new todo 
//The added TODO does't appear on the app itself
//Make an animation when added a new TODO to be more dynamic
export default App;