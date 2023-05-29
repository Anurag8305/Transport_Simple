import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BlueComponent = () => {
  return (
    <div>
        <Box color={"white"} bg={"#468fec"} m={"30px 0px"} >
            <Box width={{ base: "100%", sm: "70%", md: "50%" }} margin={"auto"} p={"20px"} align={'center'}>
            <Heading size={"md"} p={"10px"}>Be more efficient and proofitable with TransportSimple</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias possimus natus maxime et, autem incidunt. Nostrum, explicabo accusantium quibusdam vel, reprehenderit, magnam autem fugit vero facere officia consequuntur laudantium.
                Tenetur.
                </Text>
                <Button color={"white"} bg={"#ffc500"} p={"5px 20px"} mt={"10px"}>Book a Demo</Button>
            </Box>
        </Box>
    </div>
  )
}

export default BlueComponent