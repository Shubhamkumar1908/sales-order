import React, { useContext } from 'react';
import { Box, VStack, Button, Text } from '@chakra-ui/react';
import { DeleteIcon, } from '@chakra-ui/icons'
import { OrderContext } from '../context/OrderContext';

const CompletedOrders = () => {
    const { orders, deleteOrder  } = useContext(OrderContext);

    return (
        <Box display="flex" flexDirection="column" width="100%">
            {/* <Text fontSize="2xl" mb={4}>Completed Orders</Text> */}
            
                {orders.filter(order => order.completed).map(order => (
                    <Box display="flex" gap="2px" key={order.id} p={4} shadow="md" borderWidth="1px">
                        <Button width="20%" justifyContent="flex-start">{order.name}</Button>
                        <Button width="20%" justifyContent="flex-start">{order.quantity}</Button>
                        <Button width="20%" justifyContent="flex-start">{order.address}</Button>
                        <Button onClick={() => deleteOrder(order.id)}><DeleteIcon />
                    </Button>
                    </Box>
                ))}
        
        </Box>
    );
};

export default CompletedOrders;
