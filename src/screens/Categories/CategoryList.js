import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton, TablePagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { removeCategory } from "../../redux/categories/categoriesSlice";


const CategoryList = ({ categories, removeCategory, handleOpen, setCurrentId }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
    const onDelete = (category) => {
        removeCategory(category)
    }

    const data = useMemo(() => categories, [categories]);
    const columns = useMemo(() => COLUMNS, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%',  }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                                ))}
                                <TableCell sx={{ textAlign: 'center' }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                    })}
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <IconButton onClick={() => { setCurrentId(row.values.id); handleOpen() }}>
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
                count={categories.length}
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
        categories: state.categories.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCategory: (category) => dispatch(removeCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
