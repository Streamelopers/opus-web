import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { device } from "../../utils";

const ModalStyled = styled(Modal)`
  &.modal {
    z-index: 10050;
  }
  .modal-dialog {
    width: 100vw;
    height: 100vh;
    max-width: initial;
    max-height: initial;
    margin: 0;
  }
  .modal-content {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    padding-top: 15px;
    background: rgba(0, 0, 0, 0.75);
    @media ${device.lg} {
      padding-top: 30px;
    }
  }
`;

const DivStyled = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 400px;
  @media ${device.md} {
    width: 70%;
    height: 650px;
  }
  opacity: 0;
  visibility: hidden;
  transition: all 2s ease-out;
  &.loaded {
    opacity: 1;
    visibility: visible;
  }
`;

const CloseWrapper = styled.div`
  cursor: pointer;
  top: 0;
  right: 1rem;
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: #fff;
  @media ${device.md} {
    right: 2rem;
  }
`;

const CloseButton = (props) => (
  <CloseWrapper {...props}>
    <svg
      role="img"
      viewBox="0 0 24 24"
      css={`
        fill: currentcolor;
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `}
    >
      <path
        d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z"
        fill="currentColor"
      ></path>
    </svg>
  </CloseWrapper>
);

const ModalVideo = (props) => {
  const [loading, setLoading] = useState(true);
  const gContext = useContext(GlobalContext);

  const handleClose = () => {
    setLoading(true);
    gContext.toggleVideoModal();
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.videoModalVisible}
      // onHide={gContext.toggleVideoModal}
    >
      <Modal.Body className="text-center position-relative">
        <CloseButton onClick={handleClose} />

        <div className={`h-100 d-flex align-items-center w-100`}>
          <DivStyled className={`${loading ? "loading" : "loaded"}`}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=zlInYm2JrFw`}
              width="100%"
              height="100%"
              controls
              onReady={() => {
                setLoading(false);
              }}
            />
          </DivStyled>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalVideo;
