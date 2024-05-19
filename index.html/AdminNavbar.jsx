import {AppBar,Toolbar, styled}from '@mui/material'
import React from 'react' 
import { NavLink } from 'react-router-dom'
import './navbar.css';
const Header=styled(AppBar)
`
background:light green
`
const Tab=styled(NavLink)
`
font-size:20px;
color:inherit;
margin-right: 2%;
text-decoration:none; 
`

const AdminNavbar=()=>{
    var v=localStorage.getItem("data")

    return(
       <Header position='static' >
        
        <Toolbar>
        
       
        <Tab to='/admin/customers'>ViewUser</Tab>
        <Tab to='logout'>Logout</Tab>
        <Tab to='/admin/products'>Add Product</Tab>
        <Tab to='/admin/viewproduct'>ViewProduct</Tab>
        <Tab>Hello :</Tab>
        {v}
       
        </Toolbar>
       </Header>
       
    )
}
export default AdminNavbar;