import { useState } from 'react';
import './App.css';
import logo from './assets/github.png'
import Button from './components/Button';
import Input from './components/Input';
import Repos from './components/Repos';
import { api } from './services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const searchRepo = async () =>{
    const {data} = api.get(`repos/${currentRepo}`)
    if(data.id){
      setRepos(prev => [...prev, data])
    }
  }
  return (
    <div className="App">
      <img width={72} height={72} src={logo} alt='Logo Github'/>
      <h1>GitHub Wiki</h1>
      <Input />
      <Button onClick={searchRepo} />
      <Repos />
    </div>
  );
}

export default App;
