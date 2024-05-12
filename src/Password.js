import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Password = () => {
    const [typ, setTyp]= useState(false);
  return (
    <div>
            <h2 className='mb-4 text-center mt-5'>Show | Hide Password</h2>

        <Container className='d-flex justify-content-center align-items-center'>
            <input className='me-2' type={(typ) ? "text" : "password"}/>
            <Button variant="success" onClick={()=>setTyp(!typ)}>{(typ) ? "Hide":"Show"}</Button>
        </Container>
    </div>
  )
}

export default Password