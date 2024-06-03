import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const LogoutPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        
        navigate('/Login');
    };
  return (
    
      <Button className="logout" onClick={handleLogout}>Logout</Button>

  )
}

export default LogoutPage
