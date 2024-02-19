import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setDescripcion('');
    formRef.current.reset();
  };

  return (
    <Form
      ref={formRef}
      className='d-flex justify-content-center flex-column align-items-center'
      onSubmit={handleSubmit}
    >
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label className='w-100 text-center'>Correo:</Form.Label>
        <Form.Control
          className='form-control'
          type='email'
          placeholder='name@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label className='w-100 text-center'>Descripción</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' className='button-form mt-2'>
        Enviar
      </Button>
    </Form>
  );
};

export default Contacto;
