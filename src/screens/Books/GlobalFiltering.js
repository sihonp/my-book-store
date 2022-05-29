import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const GlobalFiltering = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);
    const onChange = (value) => {
        setFilter(value || undefined);
    }

    return (
        <Box sx={{ paddingLeft: 1 }}>
            <TextField id="search" label="Search" variant="standard"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value)
                }}
            />
        </Box>
    )
}

export default GlobalFiltering