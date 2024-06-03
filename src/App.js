import React from 'react';
import { ChakraProvider, extendTheme,  } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import OrderContextProvider from './context/OrderContext';
import FromPage from './pages/FromPage';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <OrderContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fromPage" element={<FromPage />} />
          </Routes>
        </Router>
      </OrderContextProvider>
      
    </ChakraProvider>
  );
}

export default App;
