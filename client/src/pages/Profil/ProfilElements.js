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

export const ProfilName = styled.h2`
  color: #fff;
  text-align: center;
`;

export const ProfilDesc = styled.p`
  margin: 30px 5px;
  color: #fff;
  font-size: 1.2rem;
`;

export const ProfilRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonDelete = styled.button`
  background: #ea2027;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 20px 0px;
`;

export const AlertMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: tomato;
  height: 50px;
`;
