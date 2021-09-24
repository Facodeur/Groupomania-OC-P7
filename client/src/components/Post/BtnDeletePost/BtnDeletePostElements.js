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

