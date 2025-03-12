import React, { useState } from 'react';
import Input from "./componentes/Input";
import Button from "./componentes/Button";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue('Error');
      }
    } else if (label === 'C') {
      setInputValue('');
    } else {
      setInputValue(inputValue + label);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={inputValue} />
        <Row>
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="AC" onClick={() => handleButtonClick('C')} />
          <Button label="(" onClick={() => handleButtonClick('(')} />

        </Row>
        <Row>
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="*" onClick={() => handleButtonClick('*')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="/" onClick={() => handleButtonClick('/')} />
          <Button label="-" onClick={() => handleButtonClick('-')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="," onClick={() => handleButtonClick(',')} />
          <Button label="+" onClick={() => handleButtonClick('+')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="=" onClick={() => handleButtonClick('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;