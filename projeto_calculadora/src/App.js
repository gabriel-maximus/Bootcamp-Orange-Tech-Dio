import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const clear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const addNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const somarNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const diminuirNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const multiplicarNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
  const dividirNumeros = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const resultado = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            somarNumeros();
            break;
          case '-':
            diminuirNumeros();
            break;
          case '*':
            multiplicarNumeros();
            break;
          case '/':
            dividirNumeros();
            break;
          default: 
            break;
        }
    }

  }
  

  return (
    <div className="Container">
      <div className='Content'>
        <Input value={currentNumber}/>
        <div className='Row'>
          <Button label='AC' onClick={()=> clear()}/>
          <Button label='/' onClick={dividirNumeros}/>
          <Button label='X' onClick={multiplicarNumeros}/>
          <Button label='.'/>
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
          <Button label='-' onClick={diminuirNumeros}/>
        </div>
        <div className='Row'>
          <Button label='1' onClick={()=> addNumber('1')}/>
          <Button label='2' onClick={()=> addNumber('2')}/>
          <Button label='3' onClick={()=> addNumber('3')}/>
          <Button label='=' onClick={resultado}/>
        </div>
      </div>
    </div>
  );
}

export default App;
