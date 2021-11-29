import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const CardContenair = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  margin: 20px;
  border-radius: 5px;
  width: 98%;
`

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding-top: 10px;
`

export const CardTextarea = styled.textarea`
  border: none;
  border-radius: 5px;
  overflow: auto;
  outline: none;
  resize: none;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 1rem;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #fff;
`

export const BtnPictureWrapper = styled.div`
  margin-left: 20px;
`

export const BtnIcon = styled.button`
  background: #000;
  color: #fff;
  border: none;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #15cdfc;
  }
`

export const BtnSend = styled.button`
  background: #15cdfc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
  margin-right: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  width: 120px;
  
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    opacity: 0.9;
  }
`

export const BtnToCancel = styled.button`
  background: #FD7272;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  margin-bottom: 15px;
  margin-right: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    opacity: 0.9;
  }
`

export const LoadingIcon = styled.div`
display: flex;
justify-content: center;
font-size: 2rem;
color: #7f8c8d;
`

export const ProfilIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  color: ${({color}) => color ? color : "#fff"};
  margin-right: 15px;
`

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #15cdfc;
  background: #fff;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
`

export const MessageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

export const MessageContent = styled.p`
  margin: 10px;
`

export const MessagePicture = styled.img`
  margin: 10px;
`