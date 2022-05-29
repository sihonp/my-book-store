import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import { COLUMNS } from './columns';
import EditIcon from '@mui/icons-material/Edit';
import { removeBook } from "../../redux/books/booksSlice";
import GlobalFiltering from './GlobalFiltering';
import ColumnFiltering from './ColumnFiltering';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, IconButton } from '@mui/material';

const BookList = ({ removeBook, books, handleOpen, setCurrentId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => books, [books]);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFiltering
    }
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter, useSortBy);

  const { globalFilter } = state

  const onDelete = (id) => {
    removeBook(id)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table {...getTableProps()} >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <ArrowDropDownIcon />
                          : <ArrowDropUpIcon />
                        : ''}
                    </span>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                  </TableCell>
                ))}
                <TableCell sx={{ textAlign: 'center' }}>
                  Action
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                prepareRow(row)
                return (
                  <TableRow {...row.getRowProps()} hover >
                    {row.cells.map(cell => {
                      return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    })}
                    <TableCell sx={{ textAlign: 'center' }}>
                      <IconButton onClick={() => { setCurrentId(row.values.id); handleOpen() }}  >
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => onDelete(row.values.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={books.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeBook: (book) => dispatch(removeBook(book)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)