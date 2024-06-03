import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (name,quantity,address) => {
        setOrders([...orders, { id: uuidv4(), name, quantity,address,completed: false }]);
    };

    const completeOrder = (id) => {
        setOrders(orders.map(order => order.id === id ? { ...order, completed: true } : order));
    };

    const deleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    const editOrder = (id) => {
        setOrders(orders.map(order => order.id === id ? { ...order, completed: true } : order));
    };


    return (
        <OrderContext.Provider value={{ orders, addOrder, completeOrder, deleteOrder,  }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
