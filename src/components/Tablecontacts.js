import User from "./User";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function Tablecontacts() {
  return (
    <Typography>
      <Table aria-label="simple table">
        <TableHead sx={{ bgcolor: 'background.main' }}>
          <TableRow >
            <TableCell sx={{ fontWeight: 700, fontSize: 20 }} align="center">Name</TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 20 }} align="center">Surname</TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 20 }} align="center">Phone number</TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 20 }} align="center">Delete contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <User />
        </TableBody>
      </Table>
    </Typography>
  )
}
