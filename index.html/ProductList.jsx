import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import pic1 from './Pictures/pic1.jpeg';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Products</Typography>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                img src={pic1}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h5">{product.flower}</Typography>
                                <Typography>{product.description}</Typography>
                                <Typography variant="h6">${product.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Buy Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  // Import axios to make HTTP requests
// function Products() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // Correctly use axios to make a GET request
//         axios.get('http://localhost:8090/api/products')
//             .then(response => {
//                 setProducts(response.data); // Set products with response data
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the products:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Products</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>{product.name} - ${product.price}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Products;
