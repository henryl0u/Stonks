import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import CardList from './Components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;