import './App.css';

import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(<App tab="home" />);
reportWebVitals();
