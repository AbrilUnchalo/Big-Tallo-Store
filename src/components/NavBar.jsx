import React from "react"
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
  

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box p='4'>
                    <h1>Big tallo</h1>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Menu>
                     <MenuButton>
                      Actions
                      </MenuButton>
                      <MenuList>
                      <MenuItem>Info</MenuItem>
                     <MenuItem>Todos nuestros productos</MenuItem>
                     <MenuItem>Envios</MenuItem>
                      <MenuItem>Ofertas</MenuItem>
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