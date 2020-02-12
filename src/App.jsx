import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { loadData } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return <div className="App">Main page</div>;
}

export default App;
