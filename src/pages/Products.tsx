import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
import Button from "@mui/material/Button";
import { border, color } from "@mui/system";

function Products() {
  const [products, setProducts] = React.useState<any>([])
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
console.log(products)
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
      <Grid container spacing={0} justifyContent='center'>
        {products.map((product: any) => {
          console.log(product.images[0])
          return (
            <Grid key={product.name} sx={{border: 1, color: 'red'}}>
              <Card key={product} sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.images[0]}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      £{product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    ADD TO BASKET
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Products