import React from 'react';
import './style/main.scss';
import Navbar from 'create-react-nav';
import Home from './files/view/home'
import Store from './files/view/store'
import Admin from './files/view/admin'
import Login from './files/view/login'
import { useDispatch } from 'react-redux'
import {auth, db} from './firebase'

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
      db.ref('apps').on('value', snapshot => {
          const key = Object.keys(snapshot.val());
          const value = Object.values(snapshot.val());
          value.map((a,i)=>{
            a.id = key[i]
          })
          dispatch({
              type: "set_data",
              data: value
          })
          dispatch({
              type: "filter_data",
              data: value
          })
      })
    }, [])

  const links = [
    ['/', 'Store', Store],
    ['/docs', 'Documentation', Home],
    ['/admin', '', Admin],
    ['/login', '', Login]
  ]

  auth.onAuthStateChanged((user) => {
  if (user) {
      dispatch({
          type: "set_admin",
          data: true
      })
  }
});
  
  return (
    <div className="App">
      <Navbar logoImg="./image/logo/logo.png" yToggle="true" triggerIcon="light" routes={links} />
    </div>
  );
}

export default App;
