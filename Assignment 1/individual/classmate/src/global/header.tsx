import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaIcons } from 'react-icons/fa';

const TitleBar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="gray.200"
      zIndex="10" position="fixed" top="0" left="0" right="0"
    >
      <Box display="flex" alignItems="center" >
        <Text fontSize="xl" fontWeight="bold">
ClassMate        </Text>
      </Box>
    </Flex>
  );
};

export default TitleBar;
