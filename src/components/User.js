import { useDispatch, useSelector } from 'react-redux';
import { onDeleteItem } from '../store/actions/contacts';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function User() {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch();
  // console.log(contacts);
  return (
    <>
      {
        contacts.map((contact) => {
          const { id, name, surname, tel } = contact;
          return (
            <TableRow key={id}>
              <TableCell align="center" >{name}</TableCell>
              <TableCell align="center">{surname}</TableCell>
              <TableCell align="center">{tel}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" startIcon={<DeleteIcon />} id={id} onClick={() => dispatch(onDeleteItem(id))}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          )
        })
      }
    </>
  )
}
