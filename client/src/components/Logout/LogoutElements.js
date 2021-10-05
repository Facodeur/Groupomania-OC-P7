import styled from "styled-components";

export const ButtonLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea2027;
  width: 40px;
  height: 40px;
  background: none;
  outline: none;
  font-size: 1.7rem;
  border-radius: 50px;
  border-style: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ea2027;
    color: #fff;
  }
`;
