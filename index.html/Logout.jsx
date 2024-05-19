import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const l = localStorage.getItem('data');
        if (l) {
            alert("Do you want to logout??");
            localStorage.removeItem('data');
            navigate('/', { replace: true });
        } else {
            console.log('Failed to logout!!');
            navigate('/', { replace: true });
            // alert("Sorry!! You are not login yet!!??");
        }
    }, [navigate]);

    return (
        <p>Logout</p>
    );
};

export default Logout;
