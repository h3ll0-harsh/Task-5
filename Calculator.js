import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <Button onClick={handleButtonClick} value="7" />
        <Button onClick={handleButtonClick} value="8" />
        <Button onClick={handleButtonClick} value="9" />
        <Button onClick={handleButtonClick} value="/" />
        <Button onClick={handleButtonClick} value="4" />
        <Button onClick={handleButtonClick} value="5" />
        <Button onClick={handleButtonClick} value="6" />
        <Button onClick={handleButtonClick} value="*" />
        <Button onClick={handleButtonClick} value="1" />
        <Button onClick={handleButtonClick} value="2" />
        <Button onClick={handleButtonClick} value="3" />
        <Button onClick={handleButtonClick} value="-" />
        <Button onClick={handleButtonClick} value="0" />
        <Button onClick={handleButtonClick} value="." />
        <Button onClick={handleButtonClick} value="=" />
        <Button onClick={handleButtonClick} value="+" />
        <Button onClick={handleButtonClick} value="C" className="clear" />
      </div>
    </div>
  );
};

const Button = ({ onClick, value, className }) => {
  return (
    <button className={`button ${className || ''}`} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Calculator;