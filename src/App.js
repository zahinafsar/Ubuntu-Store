import React from 'react';
import './style/main.scss';
import Navbar from 'create-react-nav';
import Home from './files/view/home'
import Store from './files/view/store'
import Admin from './files/view/admin'

function App() {
  const links = [
    ['/', 'Store', Store],
    ['/docs', 'Documentation', Home],
    ['/admin', 'upload', Admin],
  ]
  return (
    <div className="App">
      <Navbar logoImg="./image/logo/logo.png" yToggle="true" triggerIcon="blackLine" routes={links} />
    </div>
  );
}

export default App;
