import './App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <div className="Container">
      <div className='Content'>
        <Input />
        <div className='Row'>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <div className='Row'>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
