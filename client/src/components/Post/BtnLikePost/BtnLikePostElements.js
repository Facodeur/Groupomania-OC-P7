import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { HiOutlineHeart } from "react-icons/hi";

export const IconUnlike = styled(HiOutlineHeart)`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.1s;
    transform: scale(1.20);
  }
`

export const IconLike = styled(FcLike)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  color: red;

  &:hover {
    cursor: pointer;
    transition: 0.1s;
    transform: scale(1.20);
  }
`