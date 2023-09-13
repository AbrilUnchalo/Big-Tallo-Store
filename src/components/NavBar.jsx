import {
    Flex, 
    Spacer,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
  

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box p='4'>
                    <Link to={"/"}>
                     <h1>Big tallo</h1>
                    </Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Menu>
                     <MenuButton>
                      Actions
                      </MenuButton>
                      <MenuList>
                      <MenuItem>Todos nuestros productos</MenuItem>
                        <Link to={`/category/${category.id}`} key={category.id}>
                            <MenuItem>Feminizadas</MenuItem>
                        </Link>
                        <Link to={`/category/${category.id}`} key={category.id}>
                            <MenuItem>Automaticas</MenuItem>
                        </Link>
                     </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p="4">
                    <CartWidget />
                </Box>
                
            </Flex>   
      </div>
    )
}

export default NavBar