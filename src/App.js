import React from 'react';

import { Header } from './components';
import { Hero } from './components';
import { Recent } from './components';
import { Contribution } from './components';
import { Avatar } from './components';
import { Community } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="">
      <Header />
      <Hero />
      <Recent />
      <Contribution />
      <Avatar />
      <Community />
    </div>
  
  </div>
);

export default App;
