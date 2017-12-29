import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dreams from './containers/Dreams';
import DreamForm from './containers/DreamForm';
import DreamShow from './containers/DreamShow';
import About from './components/About';
import Contact from './components/Contact';
import TopDreams from './components/TopDreams';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dreams/top' component={TopDreams} />
                <Route exact path='/dreams' component={Dreams} />
                <Route exact path='/dreams/new' component={DreamForm} />
                <Route exact path='/dreams/:dreamId' component={DreamShow} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
