// import React from "react";
import React, { useState, useEffect } from 'react';
import * as Components from './Components';
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './home';
import Dashboard from './dashboard';

function App() {
     return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
     )
}

export default App;