import {Box, Input, Button, Text } from '@chakra-ui/react'
import { OrderContext } from '../context/OrderContext';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const FromPage = () => {
    const [orderName, setOrderName ] = useState('');
    const [quantity, setQuantity] = useState('');
    const [address, setAddress ] = useState('');
    const { addOrder } = useContext(OrderContext);

    const navigate = useNavigate();

    const handleFrom= () => {
    
        navigate('/dashboard');
    };

    const handleAddOrder = () => {
        if (orderName.trim() === '') return;
        addOrder(orderName,quantity,address);
        handleFrom();
    };

    return (
    
        <Box display="flex" flexDirection="column" gap="4px" alignItems="center" justifyContent="center">
        <Text  fontSize="20px" fontWeight="bold">Edit Order</Text>
    <Input width="50%" placeholder="Order Name" value={orderName} onChange={(e) => setOrderName(e.target.value)} />
    <Input  width="50%" placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
    <Input width="50%" placeholder='Adress' value={address} onChange={(e) => setAddress(e.target.value)}/>
    <Button width="100px"  background="red" onClick={handleAddOrder}>Add Order</Button> 
    </Box>
    
  )
}

export default FromPage
