import React from "react";
import { Box, Button, Center, ChakraProvider, Container, Flex, Heading, Image, Link, Stack, Text, Input, Wrap, WrapItem } from "@chakra-ui/react";
import image1 from './codioful-formerly-gradienta-UF_wwDxI6uk-unsplash.jpg';
import image2 from './codioful-formerly-gradienta-rKv4HduvzIE-unsplash.jpg';
import image3 from './undraw_People_search_re_5rre.png';
import image4 from './undraw_Security_on_re_e491.png';

function Home() {
  return (
    <ChakraProvider>
      <Box bg="white" minHeight="100vh">
        <Flex align="center" justify="space-between" px={4} py={2} bg="purple.800">
          <Box>
            <Text color="white" fontWeight="bold">permeb</Text>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button colorScheme="purple.800">Why us?</Button>
            <Button colorScheme="purple.800">How does it work?</Button>
            <Button colorScheme="purple.800">Benefits</Button>
            <Button color="purple.800">Subscribe</Button>
          </Stack>
        </Flex>

        <Box
        py={8}
        px={4}
        backgroundImage={`url(${image2})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
          <Box flex="1">
          <Center flexDirection="column" alignItems="center">
            <Heading size="2xl" mb={4}>Immersive connection between  <br /> web2 and web3 email</Heading>
            <Text fontSize="xl" mb={4}>There is no need to feel dangerous about your and sender email security, permamail  <br /> provide opportunity use mailing with wallet address only!</Text>
            <Flex alignItems="center">
            <Input
                type="email"
                placeholder="your@email.com"
                mr="2"
                width="300px"
            />
            <Button colorScheme="blue">
                Subscribe
            </Button>
            </Flex>
            </Center>
            <Button color="purple.800" mt={4}>Built on Arweave</Button>
            <Text fontSize="sm" mt={5}>{' '}<Text as="span" textDecor="underline">Immutable privacy policy</Text>{' '}is here. Check out
            </Text>
          </Box>
        </Box>

        <Center py={8}>
          <Stack align="center" spacing={4}>
            <Heading size="xl" color="purple.800" >What is the difference?</Heading>
            <Text fontSize="lg" color="purple.800">permeb! is built on the Arweave permaweb, which ensures that your data is  <br /> permanently stored and cannot be censored.</Text>
            <Flex alignItems="center" justifyContent="center" ml={60}>
        <Box width="25%">
        <Flex wrap="wrap" justifyContent="center">
        <Text fontSize="4xl" fontWeight="bold">
          Web 2.0
          </Text>
          </Flex>
          <Flex wrap="wrap" justifyContent="center">
          <Box
          px="4"
          py="2"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          width="110px"
        >
          Gmail
        </Box>
        <Box
          px="2"
          py="2"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          width="110px"
        >
          Yandex
        </Box>
        </Flex>

        <Flex wrap="wrap" justifyContent="center">
        <Box
          px="4"
          py="2"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          width="110px"
          mt={4}
        >
          Outlook
        </Box>
        <Box
          px="4"
          py="2"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          width="110px"
          mt={4}
        >
         Yahoo
        </Box>
        </Flex>

        <Wrap spacing={2} justify="center" mt={4}>
        <WrapItem>
        <Flex justifyContent="space-between" width="100%" mt={4}>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          Phone Number
        </Box>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          Payment information
        </Box>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          IP Address
        </Box>
        </Flex>
        </WrapItem>
        </Wrap>

        <Wrap spacing={2} justify="center" mt={4}>
        <WrapItem>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          Your Password
        </Box>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
          
        >
          Received Content
        </Box>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          Installed Apps
        </Box>
        </WrapItem>
        </Wrap>

        <Wrap spacing={2} justify="center" mt={4}>
        <WrapItem>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"
        >
          Mobile Network
        </Box>
        <Box
          px="4"
          py="1"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          bg="purple.100"

        >
          Your Name
        </Box>
        </WrapItem>
        </Wrap>
        </Box>

        <Box width="50%">
        <Text fontSize="4xl" fontWeight="bold">
            vs
          </Text>
        </Box>

        <Box width="25%" mr={40}>
        <Text fontSize="4xl" fontWeight="bold">
          Web 3.0
          </Text>
          <Box
          px="4"
          py="2"
          borderRadius="md"
          borderWidth="1px"
          mr="2"
          cursor="not-allowed"
          opacity="0.7"
          mb={30}
        >
          Any email on Arweave
        </Box>
          <Text>
          Nothing! permeb! is an Arweave permaweb notificator, so it can't collect your info as a permaweb email.
          </Text>
        </Box>
        </Flex>
          </Stack>
          </Center>


        <Center py={8}>
        <Stack spacing={4} align="center">
            <Heading size="xl" color="purple.800">How does it work?</Heading>
            <Text fontSize="lg" color="purple.800">perweb! it’s so simple, so you can have your <br /> notification about permaweb mail turn on in 3 steps!</Text>
        </Stack>
        </Center>

        <Flex justifyContent="space-between" py={4} px={8} mb={10}>
        <Box width="25%">
            <Text fontSize="lg" mb={4} color="purple.800">Fill out your email address</Text>
            <Input
            type="email"
            placeholder="your@email.com"
            />
        </Box>

        <Box width="25%">
            <Text fontSize="lg" mb={4} color="purple.800">Click “Subscribe” button</Text>
            <Button colorScheme="blue">
            Subscribe
            </Button>
        </Box>

        <Box width="25%">
            <Text fontSize="lg" mb={4} color="purple.800">Verify email in inbox</Text>
            <Button colorScheme="blue">
            Verify
            </Button>
        </Box>
        </Flex>

        <Box
        py={8}
        px={4}
        backgroundImage={`url(${image1})`}
        backgroundSize="cover"
        backgroundPosition="center"
    >
            <Heading size="xl" mb={2} color="purple.800">Subscribe to stay in touch <br/> with people!</Heading>
            <Text fontSize="lg" mb={4} color="purple.800">Sign up for permeb! today and start receiving secure and private email notifications <br/> for your blockchain transactions.</Text>
            <Input
                type="email"
                placeholder="your@email.com"
                mr="2"
                width="300px"
            />
            <Button colorScheme="blue">
                Subscribe
            </Button>
        </Box>

        <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" mb={4}>
            <Box flex="1" mx={2} mb={{ base: 4, md: 0 }}>
            <Text textAlign="center" fontWeight="bold" fontSize="3xl">permeb! Benefits</Text>
            <Text fontSize="sm" textAlign="left">permeb! is a new protocol that sends an email to your web2 email account whenever an on-chain transaction occurs involving your wallet address. This ensures that you are always notified of your blockchain activity, even if you are not actively monitoring your wallet.</Text>
            </Box>

            <Flex direction="column" flex="1" mx={10}>
            <Box mb={4} display="flex" alignItems="center" border="1px" >
                <Box mr={4} >
                <Image src={image3} alt="Secure" h={20} w={500} />
                </Box>
                <Box>
                <Text fontWeight="bold" textAlign="left" mt={2} fontSize="2xl">Secure</Text>
                <Text fontSize="sm" mr={10} textAlign="left" mb={2}>permeb! is designed to be highly secure and private. We do not collect any personal information from our users, and our privacy policy is immutable. This means that we can never sell your data, read your emails, or be taken down by a government or corporation.</Text>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" border="1px" >
                <Box mr={4}>
                <Image src={image4} alt="It's easy!" h={20}  w={500} />
                </Box>
                <Box>
                <Text textAlign="left" mt={2} fontWeight="bold" fontSize="2xl">It's easy!</Text>
                <Text fontSize="sm" textAlign="left"  mb={2} mr={10}>permeb! is also very easy to use. Simply create an account, connect your wallet, and start receiving notifications. You can even choose to receive notifications for specific types of transactions, such as deposits, withdrawals, or token transfers.</Text>
                </Box>
            </Box>
            </Flex>
        </Flex>
        </Container>

        <Flex py={4} px={4} bg="purple.800" justify="space-between">
        <Stack direction="column" spacing={2} color="white">
          <Box>
            <Text fontWeight="bold" color="white" textAlign="left">permeb</Text>
          </Box>
          <Stack direction="row" spacing={2} color="white">
              <Link>Why Us?</Link>
              <Link>How does it work?</Link>
              <Link>Benefits</Link>
          </Stack>
          <Flex justify="left" py={2} bg="purple.800">
          <Text fontSize="sm" color="white">© 2023 permweb! inc. All rights reserved.</Text>
          </Flex>
          </Stack>
            
            <Stack spacing={1}>
              <Text fontWeight="bold" color="white">Subscribe to get notifications</Text>
              <Stack direction="row" spacing={2} alignItems="center">
              <Input
                type="email"
                placeholder="your@email.com"
                mr="2"
            />
            <Button colorScheme="blue">
                Subscribe
            </Button>
            </Stack>
            </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
