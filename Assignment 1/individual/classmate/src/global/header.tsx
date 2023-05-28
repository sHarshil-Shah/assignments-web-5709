import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const TitleBar = () => {
    const navigate = useNavigate();

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
            // zIndex="10" position="fixed" top="0" left="0" right="0" 
        >
            <Box display="flex" alignItems="center" >
                <Text fontSize="xl" fontWeight="bold">
                    ClassMate        </Text>
            </Box>
            <Box display="flex" alignItems="right" >

                <Button onClick={onLogoutClick} leftIcon={<FaPowerOff />} colorScheme='red' variant='solid'>
                    Logout
                </Button>
            </Box>
        </Flex>
    );
};

export default TitleBar;
