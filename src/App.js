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
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        <TextList text={"Learn React"}></TextList>
        </div>
      </main>
    </div>
  );
}

export default App;
