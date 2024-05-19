// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const Sidebar = ({ links }) => {
    return (
        <Box component="section" position="parmanent" sx={{ p: 2, border: '1px dashed grey' }}>
            <List>
                {links.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} to={link.path}>
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
