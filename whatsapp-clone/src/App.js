import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    //Naming convention
    <div className="App">
      <div className="app__body">
          <Router>
          <Sidebar /> 
            <Switch>
               <Route path="/rooms/:roomId">
                  <Chat />
               </Route>
               <Route path="/">
                  <Chat/>
               </Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
