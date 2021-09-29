import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: 3px;
  max-width: 665px;
  width:100%;
`

export const Th = styled.th`
  text-align: center;
  border: 1px solid #a4b0be;
`

export const Tr = styled.tr`
background: ${({bgColor}) => bgColor};
height: 40px;
`

export const Td = styled.td`
  border: 1px solid #a4b0be;
  text-align: center;
  padding: 16px;
  
`

export const BtnDelete = styled.button`
  height: 30px;
  padding: 3px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #ea2027;
  font-weight: bold;

  &:hover {
    color: #ea2027;
    background: #000;
    cursor: pointer;
    transition: 0.2s;
  }
`

export const AlertMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #10ac84;
  height: 50px;
`;