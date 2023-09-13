import React from 'react'
import useConter from '../useConter'
import { Card, Image, Stack, Text, Divider, Button, ButtonGroup, Heading, CardBody, CardFooter } from '@chakra-ui/react'

const Item = ({products}) => {

    const { count, increment, decrement } = useConter(0,1)

  return (

    <Card maxW='sm'>
        <CardBody>
            <Image
                src={products.img}
                borderRadius='lg'
                minH='150px' 
                minW='200px'
                maxH='150px' 
                maxW='200px'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md' color='green.700'>{products.name}</Heading>
                <Text color='green.700' fontSize='2xl'>
                ${products.price}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='green'>
                Detalles
                </Button>
                <Button variant='ghost' colorScheme='green' onClick={decrement}>
                -
                </Button>
                <Text>{count}</Text>
                <Button variant='ghost' colorScheme='green' onClick={increment}>
                +
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    
  )
}

export default Item