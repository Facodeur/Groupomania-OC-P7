import React, { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CardContenair, CardTextarea, CardRow, LoadingIcon, ProfilIcon, CardFooter, BtnIcon, BtnPictureWrapper, BtnSend } from "./CardPostFormElements";
import { AiOutlinePicture } from "react-icons/ai";

const CardPostForm = () => {
  const fileInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState(null);
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  console.log("form", userData)

  const handlePicture = (e) => {

  }

  const handlePost = () => {

  }

  const cancelPost = () => {
    setMessage("");
    setPicture("");
    setFile("");
  }


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
        <CardFooter>
          <BtnPictureWrapper>
            <BtnIcon onClick={() => fileInputRef.current.click()} >
              <AiOutlinePicture />
            </BtnIcon>
            <input
             ref={fileInputRef} 
             type='file' 
             name="file"
             onChange={(e) => handlePicture(e)}
             accept=".jpg, .jpeg, .png, .gif"
             hidden
            />
          </BtnPictureWrapper>
          {message || picture ? (
            <button onClick={cancelPost}>Annuler message</button>
          ) : (null)}
          <BtnSend onClick={handlePost}>Envoyer</BtnSend>
        </CardFooter>
        </>
      )}
    </CardContenair>
  );
};

export default CardPostForm;
