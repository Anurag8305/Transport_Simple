
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import {FaGooglePlus,FaWhatsapp,FaFacebook,FaLinkedin,FaYoutube } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"#003152"}
      color={"white"}
      >
      <Container as={Stack} maxW={'6xl'} py={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={1}>
          <Stack align={'flex-start'}>
            <ListHeader><Heading>USA</Heading></ListHeader>
            <Text>447 Broadway,</Text>
            <Text>2nd Floor, New York,</Text>
            <Text>NY, 10013</Text>
            <Text>Phone No- 784542211212</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Heading>IND</Heading></ListHeader>
            <Text>Regus Oddice, Level 14,</Text>
            <Text>Bengaluru, Karnataka 560001</Text>
            <Text>Phone No- 784542211212</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Heading>UAE</Heading></ListHeader>
            <Text>447 Broadway,</Text>
            <Text>2nd Floor, New York,</Text>
            <Text>NY, 10013</Text>
            <Text>Phone No- 784542211212</Text>
          </Stack>

          <Stack align={'flex-start'}>
          <Box bg='white' w='100%' p={4} color='black'>
          <Input
            placeholder="Enter Your email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
          <FormLabel>Message</FormLabel>
          <Input type="text" />

        <Stack spacing={6}>
          <Button
          mt={"10px"}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
        </Box>
      </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container as={Stack} maxW={'6xl'} py={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={1}>
          <Stack align={'flex-start'}>
            <ListHeader>Help & Support</ListHeader>
            <Box display={"flex"}>
          <Text><FaGooglePlus /></Text>
          <Text>sales@TransportSimple.com</Text>
          </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>General & Sales Enquiries</ListHeader>
          <Box display={"flex"}>
          <Text><FaWhatsapp /></Text>
          <Text>+91-6372801404</Text>
          </Box>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Join Our Team</ListHeader>
            <Box display={"flex"}>
          <Text><FaGooglePlus /></Text>
          <Text>career@TransportSimple.com</Text>
          </Box>
          </Stack>
        </SimpleGrid>
        <Container as={Stack} maxW={'6xl'} py={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 7 }} spacing={1} mt={"10px"}>
            <Heading size='md'>Home</Heading>
            <Heading size='md'>Feature</Heading>
            <Heading size='md'>About Us</Heading>
            <Heading size='md'>Pricing</Heading>
            <Heading size='md'>Contact</Heading>
            <Heading size='md' display={"flex"}><FaFacebook /><FaLinkedin /><FaYoutube /></Heading>
            <Heading size='md'>Get our app from playstore</Heading>
        </SimpleGrid>
        </Container>
        
      </Container>
      </Box>
    </Box>
  );
}