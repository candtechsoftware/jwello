import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/Projects/AddProject';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/add-project" component={AddProject} />
     </div>
     </Router>
  );
}

export default App;
