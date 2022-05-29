import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import useClasses from '../../hooks/useClasses';
import style from "./style";
import Autocomplete from '@mui/material/Autocomplete';
import { Modal, Button, Paper, TextField, Typography, Stack } from '@mui/material'
import { addBooks, updateBook } from "../../redux/books/booksSlice";

const BookForm = ({ addBooks, books, categories, updateBook, open, handleClose, currentId, setCurrentId }) => {
    const classes = useClasses(style);
 
    const [book, setBook] = useState({
      id: null,
      name: '',
      author: '',
      price: '',
      category: null,
    });

    const item = currentId ? books.find((item) => item.id === currentId) : null;
  
    useEffect(() => {
      if (item) setBook(item);
    }, [item]);
  
    const clear = () => {
      setCurrentId(0);
      setBook({ name: '', author: '', price: '', category: null });
    };
  
    const bookLength = books.length;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const bookData = { ...book, id: bookLength + 1 }
      if (currentId === 0) {
        addBooks(bookData)
        clear()
      } else {
        updateBook(book);
        clear();
      }
    };

  return (
    <Modal open={open} onClose={handleClose} >
      <Paper className={classes.modal}>
        <form autoComplete="off" className={classes.form} onSubmit={handleSubmit} >
          <Typography variant="h6">
            {currentId ? `Editing "${item.name}"` : 'Creating a Book'}
          </Typography>
          <TextField name="name" variant="outlined" label="Name" fullWidth margin="normal" required
            onChange={(e) => setBook({ ...book, name: e.target.value })}
            value={book.name}
          />
          <TextField name="author" variant="outlined" label="Author" fullWidth margin="normal" required
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            value={book.author}
          />
          <TextField name="price" type='number' variant="outlined" label="Price" fullWidth margin="normal" required
            onChange={(e) => setBook({ ...book, price: e.target.value })}
            value={book.price}
          />
          <Autocomplete
            fullWidth
            onChange={(e, newValue) => setBook({ ...book, category: newValue })}
            value={book.category}
            options={categories.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Category" margin="normal" required/>}
          />
          <Stack direction="row" spacing={4}>
            <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="primary" onClick={clear} fullWidth>Clear</Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  )
}

const mapStateToProps = state => {
    return {
      books: state.books.books,
      categories: state.categories.categories
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addBooks: (bookData) => dispatch(addBooks(bookData)),
      updateBook: (book) => dispatch(updateBook(book)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BookForm)