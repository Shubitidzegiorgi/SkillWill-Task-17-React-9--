import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import ItemList from './components/ItemList';
import ThemeToggle from './components/ThemeToggle';
import { fetchItems } from './actions/itemActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="App">
        <ThemeToggle />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;