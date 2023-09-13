import { Card, Image, Stack, Text, Heading, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const product = products.find((producto) => producto.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Center p="1rem">
      <Card maxW="md">
        <Image src={product.img} />
        <Stack spacing="3" p="1rem">
          <Heading size="md">{product.name}</Heading>
          <Text>Sabor: {product.sabor}</Text>
          <Text>THC: {product.THCLevel}</Text>
          <Text color="green.700" fontSize="2xl">
            ${product.price}
          </Text>
        </Stack>
      </Card>
    </Center>
  );
};

export default ItemDetail;