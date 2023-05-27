import React from 'react';
import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TitleBar = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const onLogoutClick = () => {
    // Navigate to the desired route
    navigate('/logout');
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="gray.200"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="10"
      borderBottom="1px solid"
      borderBottomColor="gray.400"
      boxShadow="sm"
    >
      <Box>
        <Text fontSize={isMobile ? 'md' : 'xl'} fontWeight="bold">
          ClassMate
        </Text>
      </Box>
      <Box>
        <Button
          onClick={onLogoutClick}
          leftIcon={<FaPowerOff />}
          colorScheme="red"
          variant="solid"
          size={isMobile ? 'sm' : 'md'}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default TitleBar;
