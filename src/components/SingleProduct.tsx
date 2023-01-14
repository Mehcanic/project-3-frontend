import React from "react"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"
import { baseUrl } from '../config'

function SingleProduct(){
  const [ product, setProduct ] = React.useState<any>(null)
  const { _id } = useParams()
  console.log(product)

  React.useEffect(() => {
    async function fetchProduct(){
      const resp = await fetch(`${baseUrl}/products/${_id}`)
      const data = await resp.json()
      setProduct(data)
    }
    fetchProduct()
  }, [])

  if(!product){
    return <p>Loading</p>
  }

  return(
    <>
    {product && <ProductCard  {...product} />  }
    </>
  )
}

export default SingleProduct