import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from '../screens/Books';
import Categories from '../screens/Categories'
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const Router = ({ mode, setMode, open, handleClose, handleOpen, currentId, setCurrentId }) => {
    return (
        <div>
            <TopBar
                mode={mode}
                setMode={setMode}
                handleOpen={handleOpen}
                setCurrentId={setCurrentId}
            />
            <Routes>
                <Route path="/" element={<Books
                    open={open}
                    handleClose={handleClose} />}
                    handleOpen={handleOpen}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />
                <Route path="/books" element={<Books
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />} />
                <Route path="/categories" element={<Categories
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                />} />
            </Routes>
            <BottomBar />
        </div>
    )
}

export default Router