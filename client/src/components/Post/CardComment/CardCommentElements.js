import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  background: #000;
  height: 80px;
  padding: 20px;
  border-radius: 5px;
  margin: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

export const BtnSend = styled.input`
  width: 90px;
  height: 35px;
  background: #15cdfc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.2s;
  }
`;
