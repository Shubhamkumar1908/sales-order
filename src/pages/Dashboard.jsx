import React from 'react';
import { useState } from 'react';
import './Dashboard.css'
import { Box, Button, HStack, useColorMode,  } from '@chakra-ui/react';
import ActiveOrders from './ActiveOrders';
import CompletedOrders from './CompletedOrders';
import AddOrder from './AddOrder';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [showActiveOrders, setShowActiveOrders,] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/');
    }


    return (

        <Box p={4}>
            <HStack justifyContent="space-between">
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
                <AddOrder />
                <Button className="logout" onClick={handleLogout}>Logout</Button>
            </HStack>
            <br></br>
            <br></br>
            <HStack justifyContent="flex-start" gap="20px">
                <Button className="active" onClick={() => setShowActiveOrders(true)}>Active Orders</Button>
                <Button className="complete" onClick={() => setShowActiveOrders(false)}>Completed Orders</Button>
            </HStack>
            <HStack spacing={4} mt={4} justifyContent="space-around">
                {showActiveOrders ? <ActiveOrders /> : <CompletedOrders />}
            </HStack>
        </Box >

    );
};

export default Dashboard;
