import React from "react";
import { CssBaseline, Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button, Paper } from "@mui/material";
import { border, color } from "@mui/system";
import ProductCard from "../components/ProductCard";
import { IProduct }  from '../interface/product'
function Products() {
  const [products, setProducts] = React.useState<Array<IProduct> | []>([])
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [imageShape, setImageShape] = React.useState(0)

  function randomNum() {
    return Math.floor(Math.random() * 4) + 1
  }

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };
  if (!products) {
    return <h1>Loading...</h1>
  }

  React.useEffect(() => {
    getProducts()
    setImageShape(randomNum())
  }, [])


  return (
    <>
      <CssBaseline />
      <Container fixed sx={{mt: '10px'}}>
        <Grid container spacing={4} direction="row">
          {products.map((product: IProduct) => {
            return (
            <Grid item xs={12} lg={3} md={4} key={product.name}>
              <ProductCard 
              {...product}
              />
            </Grid>
          )})}
        </Grid>
      </Container>
    </>
  )
}

export default Products