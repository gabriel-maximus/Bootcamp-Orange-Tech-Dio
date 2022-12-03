import './App.css';
import logo from './assets/github.png'
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <img width={72} height={72} src={logo} alt='Logo Github'/>
      Teste
      <Input />
    </div>
  );
}

export default App;
