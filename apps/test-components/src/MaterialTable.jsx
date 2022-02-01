import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTable } from '@motor-js/engine';
import { qlikConfig } from "./config";


export default function MaterialTable() {
  
  const config = qlikConfig

  const [dataSize, setDataSize] = useState(50)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
    }
  }));

  //const sortCriteria = { qInterColumnSortOrder: [4] };

  const { 
    dataSet,
    headerGroup,
    qLayout,
    changePageSize,
    handlePageChange,
    exportData,
  } = useTable({
    cols,
    config,
    sortCriteria: { qInterColumnSortOrder: [0] },
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 10,
      qHeight: 10,
    },
  });


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    handlePageChange(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    changePageSize(+event.target.value)
    setPage(0);
  };
  
  useEffect(() => {
    qLayout && setDataSize(qLayout.qHyperCube.qSize.qcy)
  },[qLayout])

  const handleExport = () => exportData()

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Button onClick={handleExport}>Export</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headerGroup && headerGroup.map((column) => (
                <StyledTableCell
                  key={column.qInterColumnIndex}
                  align={'left'}
                  style={{ minWidth: 170 }}
                >
                  {column.title}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSet && 
              dataSet
              //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
      {
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={dataSize && dataSize}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      }
    </Paper>
  );
}
