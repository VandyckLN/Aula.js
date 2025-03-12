import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  margin: 2px;
  font-size: 15px;
  background-color:rgb(10, 157, 241);
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color:rgb(6, 89, 122);
  }
`;

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