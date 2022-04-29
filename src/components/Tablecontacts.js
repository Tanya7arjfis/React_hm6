import User from "./User"

export default function Tablecontacts() {
  return (
    <table className='contact-table'>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone number</th>
          <th>Delete contact</th>
        </tr>
        <User/>
      </tbody>
    </table>
  )
}
