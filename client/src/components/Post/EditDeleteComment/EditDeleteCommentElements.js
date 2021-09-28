import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  height: 50px;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;

  
`

export const BtnToCancel = styled.button`
  background: #FEA47F;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const Input = styled.input`
  width: 70%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 0 3px;
`

export const BtnInput = styled.input`
  background: #15cdfc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`