
import './App.css';
import Counter from './Counter';
import Header from './Header';
import User from './User';
import { useState } from 'react';
function App() {
  const [isLogin,setIsLogin] = useState(false);
  const [counter,setCounter] = useState(0)
  const [apiUser,setApiUser] = useState([])
  return (
    <div className="App">
      <Header 
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        counter = {counter}
        ></Header>
      <Counter setCounter={setCounter} counter={counter}></Counter>
      <User apiUser={apiUser} setApiUser={setApiUser}></User>
    </div>
  );
}

export default App;
