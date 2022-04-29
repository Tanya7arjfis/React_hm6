import React from 'react'
import { useState, useEffect } from 'react';
import Tablecontacts from "./components/Tablecontacts";
import Form from "./components/Form";
import { useDispatch } from 'react-redux';
import { fetchContact } from './store/actions/contacts'
import "./App.css"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact())
  }, [])

  const [showForm, setShowForm] = useState('false');
  function handlertoggleForm() {
    setShowForm(!showForm);
  }

  function cancel() {
    handlertoggleForm();
  }

  return (
    <>
      <div>
        <h1 className='contact-title'>Contacts List</h1>
        <Tablecontacts />
      </div>
      <div>
        <h1>Form Contacts</h1>
        <button className='add-form' onClick={handlertoggleForm}>
          Add new contact
        </button>
        {!showForm ? <Form oncancel={cancel} /> : undefined}
      </div>
    </>
  )
}

export default App;