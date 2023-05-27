import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    Radio, RadioGroup,
    useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaPortrait } from "react-icons/fa";
import TitleBar from '../global/header';


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CPortrait = chakra(FaPortrait);


const SignUp: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const handleShowConfirmClick = () => setShowConfirmPassword(!showConfirmPassword);

    const toast = useToast();

    const [value, setValue] = React.useState('1');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        // Perform form submission logic here
        console.log('Form submitted:', formData);
        // Reset form fields
        setFormData({
            email: '',
            fname: '',
            lname: '',
            pass: '',
            conpass: '',
            utype: ''
        });

        toast({
            title: 'Form Submitted',
            description: `Username: ${formData.email}, Password: ${formData.pass}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

    };

    const [formData, setFormData] = useState({
        email: '',
        fname: '',
        lname: '',
        pass: '',
        conpass: '',
        utype: ''
    });


    return (
        <><TitleBar /><Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >

            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Create User</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />} />
                                    <Input type="email" name="email" placeholder="email address" />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CPortrait color="gray.300" />} />
                                    <Input type="text" name="fname" placeholder="First Name" />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CPortrait color="gray.300" />} />
                                    <Input type="text" name="lname" placeholder="Last Name" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />} />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        name="pass"
                                        placeholder="Password" />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />} />
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        name="conpass" />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowConfirmClick}>
                                            {showConfirmPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <RadioGroup name="utype" onChange={setValue} value={value}>
                                        <Stack direction='row'>
                                            <Radio value='std'>Student</Radio>
                                            <Radio value='prof'>Professor</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Create User
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>


        </Flex></>
    );
};

export default SignUp;