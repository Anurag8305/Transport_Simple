import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Achievement = () => {
	return (
		<div>
			<Box margin={"20px"}>
            <Heading size={"lg"} mb={"20px"} color={"blue"}>Achievement & News</Heading>
				<Container maxW='650px'>
                <Grid
					h="auto"
					templateRows="repeat(4, 1fr)"
					templateColumns="repeat(4, 1fr)"
					gap={4}
				>
					<GridItem rowSpan={3} colSpan={3} ><Box border={"1px solid red"}><Image width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
					<GridItem colSpan={1} ><Box border={"1px solid red"}><Image  width={"100%"} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box></GridItem>
				</Grid>
                </Container>
			</Box>
		</div>
	);
};

export default Achievement;
