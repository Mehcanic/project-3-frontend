import React from "react"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function SingleProduct(){
  const [ product, setProduct ] = React.useState<any>(null)
  const { _id } = useParams()
  console.log(product)

  React.useEffect(() => {
    async function fetchProduct(){
      const resp = await fetch(`/api/products/${_id}`)
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