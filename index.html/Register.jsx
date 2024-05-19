import styled from "@emotion/styled";
import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, TextField, Typography ,Button} from "@mui/material";
import { addUser } from "../service/api";
const Container= styled(FormGroup)
`width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px
}`
const initialValues={
    name: '',
    email: '',
    phno: '',
    password: '',
}
const Register=()=>{
    const [user,setUser]=useState(initialValues);
    const onValueChange=(e)=>{
       
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUserDetails=async()=>{
       await addUser(user);
       alert("Registration is successful, you can now login");

    }
    return(
        <Container>
           
        <Typography variant="h3">Register Yourself</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
           <Input onChange={(e)=> onValueChange(e)}name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email </InputLabel>
            <Input onChange={(e)=> onValueChange(e)}name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phno</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}name="phno"/>
        </FormControl>
        <FormControl>
        <TextField id="outlined-password-input"
         label="Password" 
        type="password"
        autoComplete="current-password" onChange={(e)=> onValueChange(e)}name="password"/>
     </FormControl>
     <FormControl>
     <Button onClick={()=>addUserDetails()}variant="contained">Sign up</Button>
     <div>
        <p><a href="/login">Click here</a> for login...</p>
            
       
     </div>
     </FormControl>
    </Container>
    )
}
export default Register;