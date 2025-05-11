import React, { useEffect, useState } from 'react'
import DisplayProduct from './DisplayProduct'

function ProductListe() {
    const [productList,setProductList]=useState([])
    const displayProducts=()=>{
        if(productList.length>0){
           return productList.map((item,key)=>{            
            return <DisplayProduct product={item} key={key}/>
        })
        }
        return <tr>
              <td colSpan={7}>no item</td>
        </tr>
        
        
    }
    const getProduct=async()=>{
        const response= await fetch('https://fakestoreapi.com/products')
        const produt= await response.json();
        setProductList(produt)
        
    }
    useEffect(()=>{
     getProduct();     
     
    },[])
   
  return (
    <div className='container-fluix mx-auto w-75 my-3'>
      <h1>Liste des produites: </h1>
      <table className="table">
        <thead>
            <tr>
                <th>#id</th>
                <th>titel</th>
                <th>prix</th>
                <th>categorei</th>
                <th>image</th>
                <th>rating</th>
            </tr>
        </thead>
        <tbody>
            {displayProducts()}
        </tbody>
      </table>
    </div>
  )
}

export default ProductListe
