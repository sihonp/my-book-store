import React from 'react';
import useClasses from '../../hooks/useClasses';
import style from "./style";
import { Container } from '@mui/material';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = ({ open, handleClose, handleOpen, currentId, setCurrentId }) => {
  const classes = useClasses(style);

  return (
    <>
      <Container className={classes.container}>
        <BookList
          setCurrentId={setCurrentId}
          handleOpen={handleOpen}
        />
      </Container>
      <BookForm
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />

    </>
  )
}

export default Books;