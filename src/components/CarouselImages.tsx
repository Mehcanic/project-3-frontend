import { CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'

function CarouselImages(props: any) {
  return (
    <>
    <Link to={`/products/${props._id}`}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.image}
      />
    </Link>
    
    </>

  )
}

export default CarouselImages