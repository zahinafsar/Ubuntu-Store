import React from 'react';
import './style/main.scss';
import Navbar from 'create-react-nav';
import Home from './files/view/home'
import Store from './files/view/store'
import Admin from './files/view/admin'
import Login from './files/view/login'

function App() {
  const links = [
    ['/', 'Store', Store],
    ['/docs', 'Documentation', Home],
    ['/admin', '', Admin],
    ['/login', '', Login]
  ]
  
  return (
    <div className="App">
      <Navbar logoImg="./image/logo/logo.png" yToggle="true" triggerIcon="light" routes={links} />
    </div>
  );
}

export default App;
