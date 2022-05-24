import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import fon from './assets/images/fon.jpg'

const App = () => {
  return (
    <div className="app">
      <header className={'app_header'}>
          <img src={logo} alt="" className={'logo'}/>
      </header>
      <nav className={'app_navbar'}>
          <div><a href="">Profile</a></div>
          <div><a href="">Messages</a></div>
          <div><a href="">News</a></div>
          <div><a href="">Music</a></div>
          <div><a href="">Settings</a></div>
      </nav>
      <div className={'app_content'}>
        <div>
            <img src={fon} alt="" className={'fon'}/>
        </div>
          <div>ava + description</div>
          <div>
              My posts
              <div>
                  new post
              </div>
              <div>post 1</div>
              <div>post 2</div>
          </div>
      </div>

    </div>
  );
}

export default App;
