import React, {useState} from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Divider,
  Image,
  ChakraProvider,
} from '@chakra-ui/react';
import image from './undraw_Security_on_re_e491.png'
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';

const SignUp = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <ChakraProvider>
      <Flex direction="column" height="100vh">
        <Box bg="purple.800" px={4} py={2}>
          <Text color="white" fontWeight="bold">
            permeb
          </Text>
        </Box>
        <Flex flex={1}>

          <Box flex={1} p={4} bg="white" mt={25}>
            <Heading mb={2}>Sign Up</Heading>
            <Text mb={4}>
              Sign up for permeb! and start receiving secure and private <br/> email notifications for your blockchain transactions.
            </Text>
            <Input placeholder="Your name" mb={4} />
            <Box
              borderWidth={2}
              borderStyle="dashed"
              borderColor="gray.300"
              p={4}
              mb={4}
              height="300px"
            >
              Drop your Arweave key
              <Input type="file" mb={4} onChange={handleFileChange} />
            </Box>
            <Divider />
            <Text textAlign="center">Or</Text>
            <Link to="/landingpage">
            <Button colorScheme="blue" width="900px">Get a Wallet</Button>
            </Link>
          </Box>

          <Box flex={1} p={4} bg="white">
            <Image
              src={image}
              alt="Image"
              objectFit="contain"
              height="700px"
            />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default SignUp;
