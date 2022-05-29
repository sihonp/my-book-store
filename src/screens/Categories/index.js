import React from "react";
import useClasses from '../../hooks/useClasses';
import style from "./style";
import { Container } from "@mui/material";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

const Categories = ({ open, handleClose, handleOpen, currentId, setCurrentId }) => {
  const classes = useClasses(style);

  return (
    <>
      <Container className={classes.container}>
        <CategoryList
          setCurrentId={setCurrentId}
          handleOpen={handleOpen}
        />
      </Container>
      <CategoryForm
        currentId={currentId}
        setCurrentId={setCurrentId}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

    </>
  )
}

export default Categories;