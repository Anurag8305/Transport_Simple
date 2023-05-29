import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function TopComponent() {
	return (
		<Stack
			minH={"100vh"}
			direction={{ base: "column", md: "row" }}
			m={"30px 0px"}
		>
			<Flex p={8} flex={1}>
				<Stack spacing={2} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text>Cotent fleet management</Text>
						<Text>Content fleet</Text>
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
						doloremque optio. Placeat, quas consectetur velit sit ratione
						cumque, non perspiciatis sed eveniet, odio quibusdam tempore
						veritatis facere unde incidunt sapiente.
					</Text>
					<Stack direction={{ base: "column", md: "row" }} spacing={4}>
						<Button
							rounded={"full"}
							bg={"#ffc500"}
							color={"white"}
							_hover={{
								bg: "#ffc500",
							}}
						>
							Get Started
						</Button>
						<Button rounded={"full"} border={"1px solid #ffc500"}>
							Contact Us
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1} position={"relative"}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 100 100">
					<path
						fill="#0099ff"
						fill-opacity="1"
						d="M0,96L360,32L720,288L1080,192L1440,32L1440,0L1080,0L720,0L360,0L0,0Z"
					></path>
				</svg>
				<Box position={"absolute"}>
					<Image
						borderRadius={"50%"}
						boxSize="150px"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz9wROtfW9PuX0rKfAm2dpywSyDUHjMglaw&usqp=CAU"
						alt="Dan Abramov"
					/>
					<Image
						borderRadius={"50%"}
						boxSize="150px"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz9wROtfW9PuX0rKfAm2dpywSyDUHjMglaw&usqp=CAU"
						alt="Dan Abramov"
					/>
				</Box>
			</Flex>
		</Stack>
	);
}
