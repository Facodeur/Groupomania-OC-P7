import styled from "styled-components";

export const UpdatTextarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: auto;
  outline: none;
  resize: none;
  width: 100%;
  padding: 7px;
  font-size: 1rem;
`

export const BtnValidUpdate = styled.button`
  height: 30px;
  background: #15cdfc;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 5px 0;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.2s;
  }
`