// Anonymous Messaging Website
import React, { useState } from "react";
import { Box, Input, Button, VStack, Heading, Text, Container, Stack, ListItem, List } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Anonymous Messenger
        </Heading>
        <Text>If you have something to say but don't want to reveal your identity, you can leave a message here.</Text>
        <Box
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
            <Input placeholder="Type your message here..." value={message} onChange={handleMessageChange} size="md" />
            <Button leftIcon={<FaPaperPlane />} colorScheme="teal" px={8} onClick={handleSendMessage}>
              Send
            </Button>
          </Stack>
        </Box>
        <Box w="100%">
          <Heading as="h3" size="md" mb={4}>
            Messages
          </Heading>
          <List spacing={3}>
            {messages.map((msg, index) => (
              <ListItem key={index} p={3} bg="gray.100" borderRadius="md">
                {msg}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
