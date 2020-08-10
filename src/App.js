import React from 'react';
import './style/main.scss';
import Navbar from 'create-react-nav/nav/navSnack';
import Home from './files/view/home'
import Store from './files/view/store'

function App() {
  const links = [
    ['/', 'Home', Home],
    ['/store', 'Store', Store]
  ]
  return (
    <div className="App">
      <Navbar logoTxt="UBUBTU STORE" triggerIcon="blackLine" routes={links} />
    </div>
  );
}

export default App;
