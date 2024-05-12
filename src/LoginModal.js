import React, { useState } from 'react'
import './Common.css'
import Button from 'react-bootstrap/Button';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className={`modal ${showModal === true ? "show" : ""}`}>
        <span onClick={() => setShowModal(!showModal)}>&times;</span>
        This is the modal content.
      </div>
      <Button variant="success" onClick={() => setShowModal(!showModal)}>Show Modal</Button>
    </div>
  )
}

export default LoginModal