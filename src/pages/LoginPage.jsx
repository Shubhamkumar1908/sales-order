import React, { useState } from 'react';
import '../pages/LoginPage.css'
import { Box, Button, Input, VStack, Text, Container, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        
        navigate('/dashboard');
    };

    return (
        <body>
            <Container>
                <Box display="flex" alignItems="center" justifyContent="center" height="50vh" borderRadius="20px"
                    w='100%'
                    h='400px'
                    bgGradient={[
                        'linear(to-tr, teal.300, yellow.400)',
                        'linear(to-t, blue.200, teal.500)',
                        'linear(to-b, orange.100, purple.300)',
                    ]}

                    marginTop="150px">
                    <VStack spacing={4}>
                        <Text fontSize="30px" fontWeight="500" color="blue" >Sign In</Text>
                        <Input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button className="login" onClick={handleLogin}>Login</Button>
                    </VStack>
                </Box>
            </Container>
        </body>
    );
};

export default LoginPage;
