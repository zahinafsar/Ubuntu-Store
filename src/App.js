import React from 'react';
import './style/main.scss';
import Navbar from 'create-react-nav/nav/navSnack';
import Slider from './files/components/imageSlider'

function App() {
  const links = [
    ['/', 'Home'],
    ['/store', 'Store']
  ]
  return (
    <div className="App">
      <Navbar logoTxt="UBUBTU STORE" triggerIcon="blackLine" routes={links} />
      <Slider />
    </div>
  );
}

export default App;
