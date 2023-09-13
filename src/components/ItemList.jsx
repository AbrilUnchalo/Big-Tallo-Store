import { Link } from "react-router-dom";
import Item from "./Item"
import { SimpleGrid } from '@chakra-ui/react'

const ItemList = ({products}) => {
    return (
        <SimpleGrid columns={3} spacing={8} minChildWidth="250px">
            {
                products.map((p) => {
                    return (
                        <Link to={`/item/${p.id}`} key={p.id}>
                            <Item products={p} key={p.id} />
                        </Link>
                    )
                })
            }
        </SimpleGrid>
    )
}

export default ItemList