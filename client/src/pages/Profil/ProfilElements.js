import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const ProfilWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfilCard = styled.div`
  background: #010101;
  max-width: 500px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const ProfilTitre = styled.h2`
  color: #fff;
  text-align: center;
`

export const ProfilDesc = styled.p`
  margin: 20px 20px;
  color: #fff;
`

export const ProfilRow = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonDelete = styled.button`
  background: #EA2027;
  padding: 16px 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  
`



