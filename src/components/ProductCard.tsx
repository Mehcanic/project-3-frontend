import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material'
import { IProduct } from '../interface/product'
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Item from './Item'

function ProductCard({ _id, name, colorCode, price, images }: IProduct) {

  console.log(images)
  return (
    <>
      <Card sx={{ maxWidth: 400, display: 'flex', flexDirection: 'column' }}>
        <Carousel
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'grey',
              borderRadius: 200
            }
          }}
          navButtonsWrapperProps={{
            style: {
              bottom: '80px',
              top: 'unset'
            }
          }}
        >

          {images.map((image: any) => <Item key={image} image={image} />)}
        </Carousel>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box component='div'>
            <CardContent>
              <Typography gutterBottom variant="h6" sx={{ height: 40 }}>
                {name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Price: £{String(price)}
              </Typography>
            </CardContent>
          </Box>
          <Box component='div' sx={{ flex: '1 0 auto' }}>
            <CardContent>
              <Button variant="outlined" size="small" onClick={() => { console.log(_id) }} >add to cart</Button>
            </CardContent>
          </Box>
        </Box>

      </Card>
    </>
  )
}

export default ProductCard
