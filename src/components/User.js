import { useDispatch, useSelector } from 'react-redux';
import { onDeleteItem } from '../store/actions/contacts'


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
            <tr key={id}>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{tel}</td>
              <td><button id={id} className='btn-del' onClick={() => dispatch(onDeleteItem(id))}>Delete</button></td>
            </tr>
          )
        })
      }
    </>
  )
}
