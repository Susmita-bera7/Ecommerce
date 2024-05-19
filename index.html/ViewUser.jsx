import { useEffect,useState } from "react";
import { Table,TableHead,TableBody,TableRow,TableCell, Button } from "@mui/material";
import { getUsers,deleteUser } from "../service/api.js";
import { Link } from "react-router-dom";

    const ViewUser=()=>{
        const[users,setUsers] = useState([])
        useEffect(()=>{
            getUsersDetails();
        },[])
        const getUsersDetails=async()=>{
            let response=await getUsers();
            console.log(response);
           setUsers(response.data);
        }
        const deleteUserData=async(id)=>{
            await deleteUser(id);
            getUsersDetails();
        }
   return(
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phno</TableCell>
                <TableCell>Password</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
       <TableBody>
       {
        users.map(user=>(
            <TableRow>
               <TableCell>{user.id}</TableCell> 
               <TableCell>{user.name}</TableCell> 
               <TableCell>{user.email}</TableCell> 
               <TableCell>{user.phno}</TableCell> 
               <TableCell>{user.password}</TableCell> 
               <TableCell>
                <Button component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button onClick={()=>deleteUserData(user.id)}>Delete</Button>
               </TableCell>
            </TableRow>
        ))
       }

       </TableBody>
        
       </Table>
    )
}
export default ViewUser;