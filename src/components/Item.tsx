import React from 'react';
import { CardMedia } from '@mui/material'

function Item(props: any) {
  return (
    <>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
      />
    </>

  )
}

export default Item