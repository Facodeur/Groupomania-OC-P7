import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #15cdfc;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  max-width: 768px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  min-height: 35px;
`

export const Icon = styled(FaUserCircle)`
  width: 20px;
  height: 20px;
  color: #000;
  margin-right: 5px;
`

export const CardUsername = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 10px;
`

export const CardText = styled.p`
  font-size: 1rem;
  margin: 5px;
`

export const CardPicture = styled.img`
  margin: 2px;
  border-radius: 5px;
  max-width: 100%;
  height: auto;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  color: #57606f;
  padding-top: 10px;
`

export const IconComment = styled(BiCommentDetail)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transform: scale(1.25);
  }
`

export const DatePosted = styled.p`
  font-size: 0.8rem;
  color: #7f8c8d;
`

export const LoadingIcon = styled.div`
display: flex;
justify-content: center;
font-size: 2rem;
color: #7f8c8d;
`