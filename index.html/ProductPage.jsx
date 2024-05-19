import { useEffect,useState } from "react";
import {  Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, styled } from '@mui/material';
import { getProducts} from "../service/api.js";
import { pink} from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

    const ProductPage=()=>{
        const[products,setProducts] = useState([])
        useEffect(()=>{
            getProductsDetails();
        },[])
        const getProductsDetails=async()=>{
            let response=await getProducts();
            console.log(response);
           setProducts(response.data);
        }

        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText(pink[500]),
            backgroundColor: pink[200],
            '&:hover': {
              backgroundColor: pink[700],
            },
          }));
          
        
   return(

    <Grid container spacing={4}>
    {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxwidth: 345 }}>
                {product.image && (
                    <CardMedia
                        component="img"
                        sx={{ width: 300, objectFit: 'cover' }}
                        image={product.image}
                        alt={product.name}
                    />
                )}
                <CardContent>
               
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography>{product.description}</Typography>
                    <Typography variant="h6">${product.price}</Typography>
                </CardContent>
            
                <CardActions>
                <ColorButton variant="contained">Add to Cart</ColorButton>
                <Button><FavoriteBorderIcon/></Button>
                </CardActions>
                </Card>
              
                </Grid>
                ))}
                </Grid>
      
              
    )
}
export default ProductPage;