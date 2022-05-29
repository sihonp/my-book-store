
import React, { useState, useEffect } from "react";
import useClasses from '../../hooks/useClasses';
import style from "./style";
import { connect } from 'react-redux';
import { Button, TextField, Modal, Paper, Typography } from "@mui/material";
import { addCategory, updateCategory } from "../../redux/categories/categoriesSlice";


const CategoryForm = ({ addCategory, categories, updateCategory, currentId, setCurrentId, open, handleClose }) => {
  const classes = useClasses(style);
  const [category, setCategory] = useState({ id: null, name: '' });

  const item = currentId ? categories.find((item) => item.id === currentId) : null;

  useEffect(() => {
    if (item) setCategory(item);
  }, [item]);

  const clear = () => {
    setCurrentId(0)
    setCategory({ id: null, name: '' });
  };

  const categoryLength = categories.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = { ...category, id: categoryLength + 1 }
    if (currentId === 0) {
      addCategory(categoryData)
      clear()
    } else {
      updateCategory(category);
      clear()
    }
  };

  return (
    <Modal open={open} onClose={handleClose} >
      <Paper className={classes.modal}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant="h6">Category Lists</Typography>
          <TextField name="category" variant="outlined" label="Category" fullWidth margin="normal" required
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
            value={category.name}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
        </form>
      </Paper>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (categoryData) => dispatch(addCategory(categoryData)),
    updateCategory: (category) => dispatch(updateCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)