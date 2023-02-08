import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{user},dispatch ] = useStateValue();

  return (
    //Naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
