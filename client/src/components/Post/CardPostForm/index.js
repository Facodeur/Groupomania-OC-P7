import React, { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePicture } from "react-icons/ai";
import { timestampParser } from "../../../utils/date-parser";
import { addPost, getPosts } from "../../../actions/post.action";
import {
  CardContenair,
  CardTextarea,
  CardRow,
  LoadingIcon,
  ProfilIcon,
  CardFooter,
  BtnIcon,
  BtnPictureWrapper,
  BtnSend,
  MessageWrapper,
} from "./CardPostFormElements";
import {
  CardHeader,
  CardPicture,
  CardText,
  CardUsername,
  DatePosted,
  Icon,
} from "../CardPost/CardPostElements";

const CardPostForm = () => {
  const fileInputRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState(null);
  const [file, setFile] = useState();
  
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = () => {
    if (message || picture) {
      const data = new FormData();
      data.append("content", message);
      if (file) {
        data.append("image", file);
      }
      dispatch(addPost(data))
      .then(() => dispatch(getPosts()))
      cancelPost();
    } else {
      alert("Veuillez entrer un message");
    }
  };

  const handlePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const cancelPost = () => {
    setMessage("");
    setPicture("");
    setFile("");
  };

  useEffect(() => {
    if (userData) {
      setIsLoading(false);
    }
  }, [userData]);

  return (
    <CardContenair>
      {isLoading ? (
        <LoadingIcon>
          <FaSpinner className="fa-spin" />
        </LoadingIcon>
      ) : (
        <>
          <CardRow>
            <ProfilIcon />
            <CardTextarea
              name="message"
              placeholder={`Quoi de neuf ${userData.username} ?`}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </CardRow>
          {message || picture ? (
            <>
              <MessageWrapper>
                <CardHeader>
                  <CardUsername>
                    <Icon />
                    {userData.username}
                  </CardUsername>
                  <DatePosted>{timestampParser(Date.now())}</DatePosted>
                </CardHeader>
                <CardText>{message}</CardText>
                <CardPicture src={picture} />
              </MessageWrapper>
            </>
          ) : null}
          <CardFooter>
            <BtnPictureWrapper>
              <BtnIcon onClick={() => fileInputRef.current.click()}>
                <AiOutlinePicture />
              </BtnIcon>
              <input
                ref={fileInputRef}
                type="file"
                name="file"
                onChange={(e) => handlePicture(e)}
                accept=".jpg, .jpeg, .png, .gif"
                hidden
              />
            </BtnPictureWrapper>
            {message || picture ? (
              <button onClick={cancelPost}>Annuler message</button>
            ) : null}
            <BtnSend onClick={handlePost}>Envoyer</BtnSend>
          </CardFooter>
        </>
      )}
    </CardContenair>
  );
};

export default CardPostForm;
