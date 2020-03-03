import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './component/Home';
import Convert from './component/Convert';
import { loadData } from './store/actions';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <nav className="navigation-block">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link to="/">Главная</Link>
              </li>
              <li className="navigation-item">
                <Link to="/convert">Конвертр</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/convert">
              <Convert />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
