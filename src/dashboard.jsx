
import React, { useState, useEffect } from 'react';
import * as Components from './Components';
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
import { BrowserRouter,Routes,Route, useNavigate  } from 'react-router-dom';
import Login from './home';

import SideMenu from './menu';
import "./App.css";


function Dashboard(){
    const navigate = useNavigate();
    const handleLogin = () => {
      localStorage.setItem('app-token', "");
      useEffect(()=>{
        navigate('/');
      });
  };
    const token = localStorage.getItem('app-token');
    console.log(token);
    if(token==null|| token ==""){
        return handleLogin();
    }else{
        // localStorage.setItem('app-token', "");
        return(
            <Components.Container>
                 <SideMenu />
                 <div className="content">
        
                
                    <Components.RowContainer>
                        <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                            <Components.header>
                                400
                                <hr /> 
                                Total Applicants
                            </Components.header>
                        </Components.midbox>
                        <Components.midbox color='linear-gradient(45deg, #3498db, #2c3e50)'>
                        <Components.header>
            200
            <hr /> 
            Total Employees
        </Components.header>
                        </Components.midbox>
                        <Components.midbox color='linear-gradient(45deg, #e74c3c, #c0392b)'>
                        <Components.header>
            50
            <hr /> 
            Total HR Executives
        </Components.header>
                        </Components.midbox  >
                        <Components.midbox color='linear-gradient(45deg, #27ae60, #229954)'>
                        <Components.header>
            10
            <hr /> 
            Rejected Applicants
        </Components.header>
                        </Components.midbox>
                    </Components.RowContainer>
                    <Components.RowContainer>
                        <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                            <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                            <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                            <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                    </Components.RowContainer>
                    <Components.RowContainer>
                        
                    <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                            <Components.midbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.midbox>
                            <Components.longbox color='linear-gradient(135deg, #007acc, #00bf8f)'>
                                <Components.header>
                                    400
                                    <hr /> 
                                    Total Applicants
                                </Components.header>
                            </Components.longbox>
                    </Components.RowContainer>
                    </div>
                </Components.Container>
           );
    }
  

}
export default Dashboard;