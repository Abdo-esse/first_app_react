import React from 'react'
import Rating from './Rating';

function DisplayProduct({product}) {
    
  return (
    <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td><img width={250} src={product.image} alt={product.title} /></td> 
        <td><Rating rate={product.rating.rate}  count={product.rating.count}/></td>    
    </tr>
  )
}

export default DisplayProduct
