import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Context } from './store/context';
import Home from './component/Home';
import Convert from './component/Convert';
import { loadData } from './store/actions';
import './App.scss';

function App(props) {
  const { items, left, right } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const list = Object.values({ ...items.Valute });

  return (
    <Context.Provider value={{ list, left, right }}>
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
    </Context.Provider>
  );
}

const mapStateToProps = state => ({
  items: state.data,
  left: state.selectItem.leftBlock,
  right: state.selectItem.rightBlock
});

export default connect(mapStateToProps)(App);
