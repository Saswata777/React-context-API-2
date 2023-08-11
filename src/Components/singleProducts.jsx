import React,{useContext} from 'react'
import { Card, CardBody, CardFooter, Image, Stack , Heading, Text,Divider,Button, ButtonGroup} from '@chakra-ui/react'
import './style.css';
import { Cart } from '../context';


const SingleProducts = ({product}) => {
    
  const {cart,setCart} = useContext(Cart);
  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };


    
  return (
    <Card maxW='sm' m={4} mt={4} >
    <CardBody>
      <Image className='grow'
        src= {product.imageUrl}
        alt={product.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{product.name}</Heading>
        <Text>
        {product.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
        ₹ {product.price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>

        {isProductInCart ? (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={handleRemoveFromCart}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          )}
        
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default SingleProducts