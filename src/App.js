import './App.css';

const taskList = [
  {
    id: 1,
    name: 'Rachel Sensenig',
    item1: 'wake up',
    item2: 'drink coffee',
    item3: 'crush it'
  },
  {
    id: 2,
    name: 'Kit Fenrir',
    item1: 'teach React class',
    item2: 'show React demo',
    item3: 'wholesome vibes'
  }
]

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskItem />
    </div>
  );
}

function TaskItem() {
  return (
    taskList.map(task => (
      <ul key = {task.id}>
        <li>Name: {task.name} </li>
        <li>Task 1: {task.item1}</li>
        <li>Task 2: {task.item2}</li>
        <li>Task 3: {task.item3}</li>
      </ul>
    ))
  )
}

export default App;
