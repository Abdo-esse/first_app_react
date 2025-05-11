import React, { useEffect, useState } from 'react'
import DisplayProduct from './DisplayProduct'
import Search from './Search'

function ProductListe() {
    const [productList,setProductList]=useState([])
    const [sarchInput,setSarchInput]=useState('');
    const [categories,setCategories]=useState(["All"]);
    const [categorieFilter,setCategorieFilter]=useState("All")

    const displayProducts=()=>{        
            let produnctTemp= productList.filter(product=>{
                return (
                            (categorieFilter === "All" ||product.category === categorieFilter) 
                            &&
                            (
                                product.title.includes(sarchInput) ||
                                product.id.toString().includes(sarchInput) ||
                                product.description.includes(sarchInput)
                            )
                        );

            })
            if(produnctTemp.length>0){
           return produnctTemp.map((item,key)=>{            
            return <DisplayProduct product={item} key={key}/>
        })
        }
        return <tr>
              <td colSpan={7}>no item</td>
        </tr>
        
        
    }

    const displayCategories=()=>{
        return categories.map((categorie,key)=>{
          return <button className='btn btn-secondary' value={categorie} key={key} onClick={handleFiltreParCategorie}>{categorie}</button>
        })
    }

    const handleFiltreParCategorie=(e)=>{
         setSarchInput("")
          const inputSear=document.querySelector('#search')
          inputSear.value=""
          e.preventDefault();
          const value=e.target.value
          setCategorieFilter(value);
         
          
    }
      
    const handleSearch=(e)=>{
        const inputSearchValue=document.querySelector('#search').value
        e.preventDefault();
        setSarchInput(inputSearchValue)
   }
    const getProduct=async()=>{
        const response= await fetch('https://fakestoreapi.com/products')
        const produt= await response.json();
        setProductList(produt)
        
    }
    const getCategories=async()=>{
        const response= await fetch('https://fakestoreapi.com/products/categories')
        const categoriesfetch= await response.json();
        setCategories([...categories,...categoriesfetch])        
    }
    useEffect(()=>{
     getProduct();  
     getCategories();   
     
    },[])
   
  return (
    <div className='container-fluix mx-auto w-75 my-3'>
        <Search handleSearch={handleSearch} displayCategories={displayCategories}/>
      <h1>Liste des produites: </h1>
      <table className="table">
        <thead>
            <tr>
                <th>#id</th>
                <th>titel</th>
                <th>prix</th>
                <th>description</th>
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
