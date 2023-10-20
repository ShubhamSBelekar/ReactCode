import React from 'react';
import styled from 'styled-components';
import * as Components from './Components';

import { BrowserRouter,Routes,Route, useNavigate  } from 'react-router-dom';
import Login from './home';
const SideMenuWrapper = styled.div`
  background-color: white;
  color: white;
  width: 250px;
  height: 100%;
  elevation:1;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const ColoredSection = styled.div`
background: linear-gradient(135deg, #007acc, #00bf8f); 
  padding: 10px;
  width:100%;

`;
const ColoredSection1 = styled.div`
background: white; 
  padding: 20px;
  width:100%;
  color:black;
  font-size:20px;
  font-weight:bold;
  border:1 px solid black;

`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1 px solid black;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const MenuList = styled.ul`
  list-style: none;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  color:black;
`;

const MenuItem = styled.li`
  padding: 10px;
  margin:10px 0px 4px 2px;
  width:100%;
  
  border: 1px solid black; 
  border-radius:10px;
  color:black;
`;
const LogoutButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50px;
  padding: 10px 20px;
  background: #f65434; /* Red color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 20px;
   border: 1px solid #ff4b2b;
`;



 function SideMenu() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem('app-token', "");
    navigate('/');
};


  return (
    <SideMenuWrapper>
       <ColoredSection>
       <Components.RowContainer>
       <Components.smallcircle/>
         USERNAME
       </Components.RowContainer>
      
      </ColoredSection>
      <Components.RowContainer>
    
        <SearchInput type="text" placeholder="Search..."  />
      </Components.RowContainer>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
    
      </MenuList>
      {/* <Components.Button1 onClick={Logout} >Logout</Components.Button1> */}
      <LogoutButton onClick={Logout} >Logout</LogoutButton>
    </SideMenuWrapper>
  );
}
export default SideMenu;