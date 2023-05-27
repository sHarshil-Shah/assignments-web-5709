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
    useToast,
    Alert,
    AlertIcon
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

    const fields = {
        email: '',
        fname: '',
        lname: '',
        pass: '',
        conpass: '',
        utype: '',
    };


    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (validateForm()) {

            // Perform form submission logic here
            console.log('Form submitted:', formData);
            // Reset form fields
            setFormData(fields);

            toast({
                title: 'User Created!',
                description: `Email: ${formData.email}`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }

    };

    const [formData, setFormData] = useState(fields);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let error = "";

        // Validate email
        if (!formData.email) {
            error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error = 'Invalid email format';
        }

        // Validate password
        if (!formData.pass) {
            error = 'Password is required';
        }

        if (!formData.conpass) {
            error = 'Confirm Password is required and should be same as Password!';
        } else if (formData.pass !== formData.conpass) {
            error = 'Confirm Password should be same as Password!';
        }

        if (!formData.fname) {
            error = 'First Name is Required';
        }


        if (!formData.lname) {
            error = 'Last Name is required';
        }

        setErrorMessage(error);

        console.log(error);

        // Return true if there are no errors
        return error === '';
    };

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
                                    <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email address" />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CPortrait color="gray.300" />} />
                                    <Input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CPortrait color="gray.300" />} />
                                    <Input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
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
                                        name="pass" value={formData.pass} onChange={handleChange} placeholder="Password" />
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
                                    <Input name="conpass" value={formData.conpass} onChange={handleChange}
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                    />
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
                    {errorMessage !== '' && (
                        <Alert status="error" marginTop="2">
                            <AlertIcon />
                            {errorMessage}
                        </Alert>
                    )}
                </Box>
            </Stack>


        </Flex></>
    );
};

export default SignUp;