import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions/contacts';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Form({ oncancel }) {
  const [item, setItem] = useState({
    name: '',
    surname: '',
    tel: ''
  });

  const dispatch = useDispatch()

  function changeHandler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(item);
    dispatch(addContact(item))
    setItem({
      name: '',
      surname: '',
      tel: ''
    })
    oncancel();
  }

  function cancel(e) {
    e.preventDefault();
    oncancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <Grid
        container
        direction="column"
        rowGap={2}
        mt={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <TextField type='text' id="standard-basic"
            label="Name" variant="standard"
            onChange={changeHandler}
            value={item.name}
            name='name' />
        </Grid>
        <Grid item>
          <TextField type='text' id="standard-basic"
            label="Surname" variant="standard"
            name='surname'
            onChange={changeHandler}
            value={item.surname}
          />
        </Grid>
        <Grid item>
          <TextField type='tel' id="standard-basic"
            label="Phone" variant="standard"
            name='tel'
            onChange={changeHandler}
            value={item.phone}
          />
        </Grid>
        <Button key={4} type="submit" variant="outlined">Save contact</Button>
        <Button key={5} variant="outlined" onClick={cancel}>Cancel</Button>
      </Grid>
    </form>
  )
}