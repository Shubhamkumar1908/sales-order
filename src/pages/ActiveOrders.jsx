import React, { useContext } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { OrderContext } from '../context/OrderContext';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';


const ActiveOrders = () => {
    const { orders, completeOrder, deleteOrder, editorder } = useContext(OrderContext);
    const navigate = useNavigate();

    const handleFrom = () => {
        
        navigate('/FromPage');
    };

    return (
        <Box display="flex" flexDirection="column" width="100%">
            {/* <Text fontSize="2xl" mb={4}>Active Orders </Text> */}

            {orders.filter(order => !order.completed).map(order => (
                <Box display="flex" gap="2px" key={order.id} p={4} shadow="md" borderWidth="1px">
                    <Button width="20%" justifyContent="flex-start">{order.name}</Button>
                    <Button width="20" justifyContent="flex-start">{order.quantity}</Button>
                    <Button width="20%" justifyContent="flex-start">{order.address}</Button>

                    <Button onClick={() => completeOrder(order.id)}>  <CheckIcon/> Add to Complete</Button>
                    <Button onClick={() => deleteOrder(order.id)}><DeleteIcon />
                    {/* <Button onClick={() => editorder(order.id)}><EditIcon/></Button> */}
                    <Button className="edit" onClick={handleFrom}><EditIcon/></Button>

                    </Button>
                </Box>
            ))}

        </Box>
    );
};

export default ActiveOrders;
