// frontend/src/context/Modal.js

import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import logo from '../../assets/images/wink-xxl.png'

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        <div id="x" onClick={onClose}>X</div>
        {/* <div className='modalLogo'><a href=""><img className="mLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div> */}
        <div className='modalLogo'><a href=""><img className="mLogo" src={logo} alt="" /></a></div>
        <div><h1>Welcome to MyIntrest</h1></div>
        <div>{children}</div>

      </div>
    </div>,
    modalNode
  );
}