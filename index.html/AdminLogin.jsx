import styled from "@emotion/styled";
import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, TextField, Typography, Button } from "@mui/material";
import { getAdminLogin } from "../service/api"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const initialValues = {
    email: '',
    password: ''
};

function AdminLogin() {
    const [admin, setAdmin] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const usegetAdminRecord = async (email, password) => {

        let response = await getAdminLogin(email);
        console.log(response);
        const adminData = response.data;
        if (adminData && adminData.password === password) {
            localStorage.setItem("data", adminData.email);
            navigate('/admin/*', { replace: true });
        } else {
            console.log("Incorrect Password");
            alert('Sorry!! Login failed!');

        }
    };



    return (
        <Container>
            <Typography variant="h3">Admin Login</Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input

                    onChange={onValueChange}
                    name="email" />
            </FormControl>
            <FormControl>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    onChange={onValueChange}
                    name="password" />
            </FormControl>
            <FormControl>
                <Button
                    onClick={() => usegetAdminRecord(admin.email, admin.password)}
                    variant="contained"
                >
                    Login Admin
                </Button>
            </FormControl>
        </Container>
    );
}

export default AdminLogin;
