import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </ContextProvider>
);