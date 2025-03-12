import React from 'react';
import styled from 'styled-components';
import { InputContainer } from '../styles';

export const ButtonContainer = styled.button`
padding: 10px;
border: 1px solid #CDCDCD;
background-color:rgb(43, 21, 238);
color: #fff;
font-size: 24px;
font-weight: 700;
`

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;

  input {
    width: 100%;
    height: 100%;
    border: 0;
    padding: 10px;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input type="text" value={value} readOnly />
    </InputContainer>
  );
}

export default Input;
