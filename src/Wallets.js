import React from "react";
import { Box, Button, Center, ChakraProvider, Flex, Heading, Stack, Text, Tab, Tabs, TabList } from "@chakra-ui/react";

function Wallet() {
    const transactions = [
        {
          id: 1,
          walletAddress: "DYw8j...CNSKK",
          currency: "Ethereum",
          amount: "1.1186 ETH",
          transactionStatus: "Sent",
          emailNotificationDate: "11:53 PM 03.08.2023",
        },
        {
            id: 2,
            walletAddress: "0x742d...438f44e",
            currency: "Bitcoin",
            amount: "0.089 BTC",
            transactionStatus: "In Progress",
            emailNotificationDate: "9:32 PM 03.08.2023",
          },
          {
            id: 3,
            walletAddress: "7KYlFp...LpitbK",
            currency: "Ethereum",
            amount: "3.732 ETH",
            transactionStatus: "Received",
            emailNotificationDate: "02:20 PM 03.08.2023",
          },
      ];


  return (
    <ChakraProvider>
      <Box bg="white" minHeight="80vh">
        <Flex align="center" justify="space-between" px={4} py={2} bg="purple.800">
          <Box>
            <Text color="white" fontWeight="bold">permeb</Text>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button colorScheme="purple.800">Onchain Transaction</Button>
            <Button colorScheme="purple.800">Your Wallet Transaction</Button>
            <Button colorScheme="purple.800">Subscription Management</Button>
            <Button color="purple.800">Subscribe</Button>
          </Stack>
        </Flex>

        <Center minH="80vh">
        <Box
        flex="1"
        py={8}
        px={4}
        backgroundSize="cover"
        backgroundPosition="center"
        maxWidth="1000px"
      >
            <Heading size="2xl" mb={4}>Your Wallets</Heading>
            <Tabs variant="enclosed">
                <TabList>
                    <Tab>Bitcoin</Tab>
                    <Tab>Ethereum</Tab>
                    <Tab>Solana</Tab>
                </TabList>
            </Tabs>
            <Box flex="1" p={4}>
            <Box bg="white" borderRadius="lg" boxShadow="lg" p={4}>
              <Flex p={2} borderBottom="1px" borderColor="blue.500">
                <Box w="150px" p={2} color="gray.400" fontWeight="bold">
                  Wallet Address
                </Box>
                <Box w="150px" p={2} color="gray.400" fontWeight="bold">
                  Currency
                </Box>
                <Box w="150px" p={2} color="gray.400" fontWeight="bold">
                  Amount
                </Box>
                <Box w="200px" p={2} color="gray.400" fontWeight="bold">
                  Transaction Status
                </Box>
                <Box w="200px" p={2} color="gray.400" fontWeight="bold">
                  Email Notification Date
                </Box>
              </Flex>

                 {transactions.map((transaction) => (
                <Flex
                  key={transaction.id}
                  p={2}
                  borderBottom="1px"
                  borderColor="gray.200"
                  alignItems="center"
                >
                  <Box w="150px" p={2}>
                    {transaction.walletAddress}
                  </Box>
                  <Box w="150px" p={2}>
                    {transaction.currency}
                  </Box>
                  <Box w="150px" p={2}>
                    {transaction.amount}
                  </Box>
                  <Box w="200px" p={2}>
                    <Button>{transaction.transactionStatus}</Button>
                  </Box>
                  <Box w="200px" p={2}>
                    {transaction.emailNotificationDate}
                  </Box>
                </Flex>
              ))}

                
            </Box>
            </Box>
            </Box>
            </Center>

            </Box>
            </ChakraProvider>
  )
};

export default Wallet;
