import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormLogo = styled.img`
  height: 150px;
  width: 350px;

  @media screen and (max-width: 450px) {
    width: 230px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  background: #010101;
  max-width: 500px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 15px 15px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #15cdfc;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const TextError = styled.p`
  color: red;
  margin-top: 5px;
  text-align: ${({center}) => center ? "center" : ""}
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

export const FormCheck = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  
`
export const FormSpan = styled.span`
  color: #fff;
`
export const FormLink = styled.a`
  color: #15cdfc;
`