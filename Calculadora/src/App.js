
import {Container, Content, Row} from './styles.js';
import Input from './components/Input';
import Button from './components/Button';
import React, {useState} from 'react';



const App =() =>{
  const [currentNumber, setCurrentNumber]= useState('0');
  const [firstNumber, setFirstNumber]= useState('0');
  const [operation,setOperation]= useState('');

  const handleOnClear=()=>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('0');
  }

  const handleAddNumber = (num)=>{

      setCurrentNumber(prev=>`${prev==='0'?'':prev}${num}`)
  }

  const handleSum =() =>{

    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('');
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      
    }

  }

  const handleMinus =() =>{

    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }
    else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      
    }

  }
  const handleMultiplication =() =>{
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }
    else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');  
    }
  }

  const handleDivision =() =>{
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }
    else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');  
    }
  }

  const handleEqual =() =>{

    if(firstNumber!=='0' && operation !== '' && currentNumber!==0){
      
      switch(operation){

        case '+':
          handleSum();
          break;
        
        case '-':
          handleMinus();
          break;
        case '*':
          handleMultiplication();
          break;
        case '/':
            handleDivision();
            break;

        default:

          break;
      }
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      
    }

  }

  return (
    
    <Container> 
      <Content>
        <Input value={currentNumber} />
        <Row>
          
          <Button label='*' onClick={handleMultiplication}/>
          <Button label='/' onClick={handleDivision}/>
          <Button label='C' onClick={handleOnClear}/>
          <Button label='.' onClick={()=> handleAddNumber('.')}/>
        </Row> 
        <Row>
          <Button label='7' onClick={()=> handleAddNumber('7')}/>
          <Button label='8' onClick={()=> handleAddNumber('8')}/>
          <Button label='9' onClick={()=> handleAddNumber('9')}/>
          <Button label='-' onClick={handleMinus}/>
        </Row> 
        <Row>
          <Button label='4' onClick={()=> handleAddNumber('4')}/>
          <Button label='5' onClick={()=> handleAddNumber('5')}/>
          <Button label='6' onClick={()=> handleAddNumber('6')}/>
          <Button label='+' onClick={handleSum}/>
        </Row> 
        <Row>
          <Button label='1' onClick={()=> handleAddNumber('1')}/>
          <Button label='2' onClick={()=> handleAddNumber('2')}/>
          <Button label='3' onClick={()=> handleAddNumber('3')}/>
          <Button label='=' onClick={handleEqual}/>
        </Row> 

        <Row>
          <Button label='0' onClick={()=> handleAddNumber('0')}/>
          
        </Row> 
        


      </Content>
    </Container>
  );
}

export default App;
