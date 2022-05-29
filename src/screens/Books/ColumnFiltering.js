import { TextField } from '@mui/material';
import React from 'react'

const ColumnFiltering = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <>
            <TextField id="search" label="Search" variant="standard"
            value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </>
    )
}

export default ColumnFiltering