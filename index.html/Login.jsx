import styled from "@emotion/styled";
import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, TextField, Typography ,Button} from "@mui/material";
import { getLogin } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container= styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    background-color: lavender;
    &>div{
        margin-top:20px

    }
    Button{
        background-color: white;
        color: black;
    }
`;

const initialValues = {
    email: '',
    password: ''
};

const Login = () => {
    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    const usegetUserRecord = async (email, password) => {
        let response = await getLogin(email);
        console.log(response);
        const userData = response.data;
        
        if (userData && userData.password === password) {
            localStorage.setItem("data", userData.name);
            navigate('/', { replace: true });
        } else {
            // Handle incorrect password
            
            console.log("Incorrect password");
            alert('Login faild!! Please write the correct Email id and Password');
            // navigate('/add', { replace: true });
            // You might want to display an error message to the user here
        }
    };

    return (
        <Container>
            <Typography variant="h3"><center>Login User</center></Typography>
            <FormControl>
                <InputLabel>Email </InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <TextField id="outlined-password-input"
                    label="Password" 
                    type="password"
                    autoComplete="current-password" 
                    onChange={(e)=> onValueChange(e)} name="password"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => usegetUserRecord(user.email, user.password)} variant="contained">LoginUser</Button>

                <div>
        <b><p>Don't thave an account??
            <a href="/add">Register</a>
        </p></b>
        <b><a href="/adminlogin">Admin login</a> </b>
          
       
     </div>
            </FormControl>
        </Container>   
    );
};

export default Login;