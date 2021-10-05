import React, { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePicture } from "react-icons/ai";
import { timestampParser } from "../../../utils/utils";
import { addPost, getPosts } from "../../../actions/post.action";
import Modal from "../../Modal";
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
  BtnToCancel,
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
  const [showModal, setShowModal] = useState(false);
  const [alertError, setAlertError] = useState("");

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = () => {

    if (file && file.size > 2000000) {
      setAlertError("errorFile");
      setShowModal(true);
      return;
    }
    if (message || picture) {
      const data = new FormData();
      data.append("content", message);

      if (file) {
        data.append("image", file);
      }
      dispatch(addPost(data))
      .then(() => dispatch(getPosts()));
      cancelPost();
    } else {
      setAlertError("errorSend");
      setShowModal(true);
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
    <>
      {alertError === "errorFile" && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <p>Le fichier ne doit pas depasser 2MB</p>
        </Modal>
      )}
      {alertError === "errorSend" && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <p>Veuillez entrer un message ou une image</p>
        </Modal>
      )}
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
            {(message || picture) && (
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
            )}
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
              {(message || picture) && (
                <BtnToCancel onClick={cancelPost}>Annuler message</BtnToCancel>
              )}
              <BtnSend onClick={handlePost}>Envoyer</BtnSend>
            </CardFooter>
          </>
        )}
      </CardContenair>
    </>
  );
};

export default CardPostForm;
