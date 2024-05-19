// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProductForm() {
//     const [product, setProduct] = useState({
//         name: '',
//         price: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8090/api/products', product)
//             .then(response => {
//                 alert('Product added successfully!');
//                 // Optionally reset form or handle other logic on success
//                 setProduct({ name: '', price: '', description: '' });
//             })
//             .catch(error => {
//                 console.error('There was an error adding the product:', error);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={product.name} onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Price:</label>
//                 <input type="number" name="price" value={product.price} onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Description:</label>
//                 <textarea name="description" value={product.description} onChange={handleChange} />
//             </div>
//             <button type="submit">Add Product</button>
//         </form>
//     );
// }

// export default AddProductForm;
