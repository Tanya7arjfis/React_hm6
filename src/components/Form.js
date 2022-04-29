import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/actions/contacts'

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
    <form className='form-users'
      onSubmit={submitHandler}
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={changeHandler}
        value={item.name}
        key={1} />
      <input
        type='text'
        placeholder='Surname'
        name='surname'
        onChange={changeHandler}
        value={item.username}
        key={2} />
      <input
        type='tel'
        placeholder='Phone'
        name='tel'
        onChange={changeHandler}
        value={item.phone}
        key={3} />
      <button key={4} type="submit" className='btn'>Save contact</button>
      <button key={5} className='btn' onClick={cancel}>Cancel</button>
    </form>
  )
}