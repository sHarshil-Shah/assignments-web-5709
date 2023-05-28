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
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import ForgetPasswordModal from './forgotPasswordModal';
import { useNavigate } from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const fields = {
    email: '',
    password: '',
    general: ''
  };
  const [formData, setFormData] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = fields;

    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    console.log(errors);

    // Return true if there are no errors
    return Object.values(errors).every(value => value === '');
  };


  const openForgetPasswordModal = () => {
    setIsForgetPasswordModalOpen(true);
  };

  const onLoginClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform form submission logic here
      console.log('Form submitted:', formData);


      const userType = processLogin(formData);
      console.log(userType);
      switch (userType) {
        case "admin":
          navigate('/admin');
          break;
        case "prof":
          navigate('/prof');
          break;
        case "stud":
          navigate('/stud');
          break;
        default:
          errors.email = '';
          errors.password = '';
          errors.general = 'Wrong Email or Password!';

          setErrors(errors);
          break;
      }


      // Reset form fields
      // setFormData({ email: '', password: '', general: '' });
      // setErrors(fields);
    }
  };


  return (
    <Flex
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
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={onLoginClick}>
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
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="email address" />
                </InputGroup>
                {errors.email !== '' && (
                  <Alert status="error" marginTop="2">
                    <AlertIcon />
                    {errors.email}
                  </Alert>
                )}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input name="password" value={formData.password} onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>

                </InputGroup>
                {errors.password !== '' && (
                  <Alert status="error" marginTop="2">
                    <AlertIcon />
                    {errors.password}
                  </Alert>
                )
                }
                <FormHelperText textAlign="right">
                  <Link onClick={openForgetPasswordModal}>forgot password?</Link>
                </FormHelperText>

              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
        {errors.general !== '' && (
          <Alert status="error" marginTop="2">
            <AlertIcon />
            {errors.general}
          </Alert>
        )}
      </Stack>

      <ForgetPasswordModal
        isOpen={isForgetPasswordModalOpen}
        onClose={() => setIsForgetPasswordModalOpen(false)}
      />
    </Flex>
  );
};

export default Login;

function processLogin(formData: { email: string; password: string; }) {
  if (formData.email === 'admin@mail.com' && formData.password === 'adminpass') {
    return 'admin';
  }
  else if (formData.email === 'prof@mail.com' && formData.password === 'profpass') {
    return 'prof';
  }
  else if (formData.email === 'stud@mail.com' && formData.password === 'studpass') {
    return 'stud';
  } else {
    return 'None';
  }
}