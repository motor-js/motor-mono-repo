import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTable } from '@motor-js/engine';
import Button from  '@mui/material/Button';

export default function MaterialTable() {
  
  const config = {
    host: "motor.eu.qlikcloud.com",
    secure: true,
    port: null,
    prefix: "",
    appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
    webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
    qcs: true,
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  const cols = [
    {
      qField: 'BURGER',
      dataKey: 'burger',
      qLabel: 'Burger'
    },
    {
      qField: 'BURGER_ITEM',
      dataKey: 'burger_item',
      qLabel: 'Burger Item'
    },
    {
      qField: 'RESTAURANT',
      dataKey: 'restaurant',
      qLabel: 'Restaurant'
    }
  ];

  const { 
    dataSet,
    headerGroup,
    exportData,
  } = useTable({
    cols,
    config
  });


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Button onClick={() => exportData('data','A')}>Export Data</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headerGroup && headerGroup.map((column) => (
                <TableCell
                  key={column.qInterColumnIndex}
                  align={'left'}
                  style={{ minWidth: 170 }}
                >
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSet && 
              dataSet
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {headerGroup && headerGroup.map((column, i) => {
                      const value = row[column.dataKey];
                      return (
                        <TableCell key={i} align={'left'}>
                          {value.text}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {<TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={dataSet && dataSet.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}
    </Paper>
  );
}
