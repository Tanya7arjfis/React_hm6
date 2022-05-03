import React from 'react'
import { useState, useEffect } from 'react';
import Tablecontacts from "./components/Tablecontacts";
import Form from "./components/Form";
import { useDispatch } from 'react-redux';
import { fetchContact } from './store/actions/contacts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import "./App.css"


const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    background: {
      main: teal[700],
    }
  }
})

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
    <ThemeProvider theme={theme}>
        <Box sx={{ p: 3}}>
          <Grid container spacing={2}>
            <Grid item sm={8}>
              <h1 className='contact-title'>Contacts List</h1>
              <Tablecontacts />
            </Grid>
            <Grid item sm={4}>
              <h1>Form Contacts</h1>
              <Button variant="contained" onClick={handlertoggleForm} size="medium"> Add new contact</Button>
              {!showForm ? <Form oncancel={cancel} /> : undefined}
            </Grid>
          </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default App;