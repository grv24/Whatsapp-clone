import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    //Naming convension
    <div className="App">
      <div className="app__body">
          {/*Sidebar*/}
          <Sidebar />
          {/*Chat*/}
          <Chat />
      </div>
    </div>
  );
}

export default App;
