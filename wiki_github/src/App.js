import './App.css';
import logo from './assets/github.png'
import Input from './components/Input';
import Repos from './components/Repos';

function App() {
  return (
    <div className="App">
      <img width={72} height={72} src={logo} alt='Logo Github'/>
      <h1>GitHub Wiki</h1>
      <Input />
      <Repos />
    </div>
  );
}

export default App;
