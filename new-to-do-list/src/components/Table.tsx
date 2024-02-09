import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const TableListTasks = () => {
      
      const rows = [
        {task: 'Frozen yoghurt1', data: '15/9/2024', finished: 'true'},
        {task: 'Frozen yoghurt2', data: '15/9/2024', finished: 'true'},
        {task: 'Frozen yoghurt3', data: '15/9/2024', finished: 'true'},
        {task: 'Frozen yoghurt4', data: '15/9/2024', finished: 'true'},
        {task: 'Frozen yoghurt5', data: '15/9/2024', finished: 'true'},
      ];
    
    return(
        <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tarefa</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Terminada</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.task}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {row.task}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.data}
              </TableCell>
              {row.finished ? <TableCell align="right"><Button>Terminar</Button></TableCell> : <TableCell align="right">{row.finished}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default TableListTasks;