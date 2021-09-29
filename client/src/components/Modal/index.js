import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./ModalElements";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback((e) => {
    if(e.key === "Escape" && showModal) {
      setShowModal(false);
      
    }
  }, [showModal, setShowModal]);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <>
          <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalContent>{children}</ModalContent>
                <CloseModalButton
                  aria-label="Fermer le modal"
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        </>
      ) : null}
    </>
  );
};

export default Modal;
