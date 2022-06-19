import React,{useState,useEffect} from 'react';

import { Header } from './components';
import { Hero } from './components';
import { Recent } from './components';
import { Contribution } from './components';
import { Avatar } from './components';
import { Community } from './components';
import { LoadingSpinner } from './components';
import './App.css';

const App = () => {

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  return(
    <>
    {isloading ? <div className="App dark "> <LoadingSpinner /></div>: (
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
  ) 
  }
    </>
  );
};

export default App;
