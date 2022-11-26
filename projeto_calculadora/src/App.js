import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  
  const addNumber = (num) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}` )
  }
  const clear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  const somarNumeros = () =>{
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    }else {
      const soma = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber = String(soma);
    }
  }
  

  return (
    <div className="Container">
      <div className='Content'>
        <Input value={currentNumber}/>
        <div className='Row'>
          <Button label='AC' onClick={()=> clear()}/>
          <Button label='/' onClick={()=> addNumber('/')}/>
          <Button label='X' onClick={()=> addNumber('X')}/>
          <Button label='CALC'/>
        </div>
        <div className='Row'>
          <Button label='7' onClick={()=> addNumber('7')}/>
          <Button label='8' onClick={()=> addNumber('8')}/>
          <Button label='9' onClick={()=> addNumber('9')}/>
          <Button label='+' onClick={somarNumeros}/>
        </div>
        <div className='Row'>
          <Button label='4' onClick={()=> addNumber('4')}/>
          <Button label='5' onClick={()=> addNumber('5')}/>
          <Button label='6' onClick={()=> addNumber('6')}/>
          <Button label='-' onClick={()=> addNumber('-')}/>
        </div>
        <div className='Row'>
          <Button label='1' onClick={()=> addNumber('1')}/>
          <Button label='2' onClick={()=> addNumber('2')}/>
          <Button label='3' onClick={()=> addNumber('3')}/>
          <Button label='=' onClick={()=> addNumber('=')}/>
        </div>
      </div>
    </div>
  );
}

export default App;
