import React from 'react';
import { CssBaseline, Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { IProduct }  from '../interface/product'
import { baseUrl } from '../config'

function Collections() {
  const [products, setProducts] = React.useState<Array<IProduct> | []>([])

  const getProducts = async () => {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    setProducts(data);
  };
  if (!products) {
    return <h1>Loading...</h1>
  }

  React.useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
      <CssBaseline />
      <Container fixed sx={{mt: '10px'}}>
        <Grid container spacing={4} direction='row'>
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

export default Collections