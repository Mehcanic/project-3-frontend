import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IProduct } from '../interface/product'
import { IBasket } from '../interface/basket';
import { baseUrl } from '../config'


const basketStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function BasketModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpenBasket = () => setOpen(true);
  const handleCloseBasket = () => setOpen(false);

  const [products, setProducts] = React.useState<Array<IProduct> | []>([])
  const [basket, setBasket] = React.useState<Array<IBasket> | []>([])


  const getProducts = async () => {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    setProducts(data);
  };

  const userBasket = async () => {
    const response = await fetch (`${baseUrl}/users/:userId/basket`)
    const data = await response.json()
    setBasket(data)
  }

  if (!basket) {
    return <h1>Loading...</h1>
  }

  React.useEffect(() => {
    getProducts()
    userBasket()
  }, [])



  return (
    <div>
      <Button onClick={handleOpenBasket}><ShoppingBasketIcon sx={{ color: 'black' }} /></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseBasket}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box component='div' sx={basketStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Colour Name
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Mini Picture of Colour
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Price
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Total Price
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default BasketModal