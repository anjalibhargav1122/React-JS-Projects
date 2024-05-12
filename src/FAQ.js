import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { data } from './Questions';
import './Common.css'

const FAQ = () => {
    const [id, setId] = useState(data[0].id);
    let Data = data;
    return (
        <div>
            <Container className=' mt-5'>
                <h1 className='mb-4 text-center'>FAQs</h1>
                {
                    Data.map((val, i) => {
                        return (<div className='border border-secondary mb-4' key={i}>
                            <h4 onClick={() => { setId((val.id === id ? 0 : val.id)) }} className='m-0 text-white qes position-relative'>{val.id}  {val.qes}
                                <span className='position-absolute   fs-3 pls'>{(id === val.id) ? '-' : '+'}</span>
                            </h4>
                            <p className={`p-0 m-0  tra ${(id === val.id) ? 'ans' : ''}`}>{val.ans}</p>
                        </div>)
                    })
                }

            </Container>
        </div>
    )
}

export default FAQ