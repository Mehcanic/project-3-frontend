import React from "react";
import CollectionsHero from "../components/CollectionsHero";

function Products() {
  const [products, setProducts] = React.useState<any>([])
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  const getProducts = async () => {
    setLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
  };

  if(!products) {
    return <h1>Loading...</h1>
  }

  React.useEffect(() => {
    getProducts()
  },[])
  // console.log(products[0].images[0].image_shape1)

  return (
    <>
      {products?.map((product: any) => {
      return (
        <div key={product.name}>
          <p>{product.name}</p>
          <img src={product.images[0].image_shape1} alt="" />
          <img src={product.images[0].image_shape2} alt="" />
          <img src={product.images[0].image_shape3} alt="" />
          <img src={product.images[0].image_shape4} alt="" />
        </div>
      )
      })}
    
    </>
  )
}

export default Products