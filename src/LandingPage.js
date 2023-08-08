import React from "react";
import { Box, Button, ChakraProvider, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import image3 from './undraw_People_search_re_5rre.png';
import image4 from './undraw_Security_on_re_e491.png';

function LandingPage() {
  return (
    <ChakraProvider>
      <Box bg="white" minHeight="100vh">
        <Flex direction="column">
          <Flex align="center" justify="space-between" px={4} py={2} bg="purple.800">
            <Box>
              <Text color="white" fontWeight="bold">permeb</Text>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button colorScheme="purple.800">Onchain Transaction</Button>
              <Button colorScheme="purple.800">Connected Wallets</Button>
              <Button color="purple.800">Subscribe</Button>
            </Stack>
          </Flex>

          <Box p={4} bg="white">
            <Flex direction="column">
              <Box mb={4}>
                <Heading>Welcome, Nickname!</Heading>
                <Text>
                  We're excited to have you on board! permeb! is a new protocol that sends an <br/>
                  email to your web2 email account whenever an on-chain transaction occurs <br/>
                  involving your wallet address. This ensures that you are always notified of your <br/>
                  blockchain activity, even if you are not actively monitoring your wallet.
                </Text>
              </Box>

              <Box mb={4} mt={20}>
                <Heading>Explore</Heading>
                <Flex direction="row" mt={10}>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none" }}
                    flex={1}
                    p={4}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    textAlign="center"
                    maxW="500px"
                    mx="auto"
                  >
                    <Image src={image3} alt="Secure" h={32} w={32} mb={4} mx="auto" />
                    <Text fontWeight="bold" fontSize="xl">Onchain transactions</Text>
                    <Text fontSize="md" mt={2}>
                      Check your onchain transactions from all wallets.
                    </Text>
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: "none" }}
                    flex={1}
                    p={4}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    textAlign="center"
                    maxW="500px"
                    mx="auto"
                    ml={4}
                  >
                    <Image src={image4} alt="It's easy!" h={32} w={32} mb={4} mx="auto" />
                    <Text fontWeight="bold" fontSize="xl">Connected wallets</Text>
                    <Text fontSize="md" mt={2}>
                      Check your connected wallets and their activities.
                    </Text>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default LandingPage;
