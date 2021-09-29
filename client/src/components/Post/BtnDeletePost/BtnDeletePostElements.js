import styled from "styled-components";
import { RiDeleteBinLine } from 'react-icons/ri';

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    transform: scale(1.15);
  }
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    color: red;
    background: #000;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

