
import { Box, Button, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const AddOrder = () => {



    const navigate = useNavigate();

    const handleFromPage = () => {
        
        navigate('/FromPage');
    };

    return (
        <Box>
            <HStack spacing={4}>
                {/* <Input placeholder="Order Name" value={orderName} onChange={(e) => setOrderName(e.target.value)} /> */}
                {/* <Button background="red" onClick={handleAddOrder}>Add Order</Button> */}
                <Button className="from" onClick={handleFromPage}>Add Order</Button>

            </HStack>
        </Box>
    );
};

export default AddOrder;
