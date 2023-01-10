import React from "react";
import CollectionsHero from "../components/CollectionsHero";

function Products() {
  const [products, setProducts] = React.useState([])
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

  return products?.map((product: any) => {
    return (
      <>
        <p>{product.name}</p>
        <img src={product.images.image_shape1} alt="" />
      
      </>
    )
  })
}

export default Products