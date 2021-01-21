import React from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Search from './components/Search';
import './Styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Main />
    </>
  );
}

export default App;
