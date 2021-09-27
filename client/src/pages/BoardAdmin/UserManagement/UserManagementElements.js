import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  
  margin: 3px;
  max-width: 768px;
  width:100%;
`
export const Tbody = styled.tbody`
  
`

export const Th = styled.th`
  text-align: center;
  border: 1px solid #a4b0be;
`

export const Tr = styled.tr`
background: ${({bgColor}) => bgColor};
border: 1px solid #a4b0be;
height: 40px;
`

export const Td = styled.td`
  border: 1px solid #a4b0be;
  text-align: center;
  padding: 16px;
  
`

export const AlertMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #10ac84;
  height: 50px;
`;