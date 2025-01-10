import React from 'react';
import { BrowserRouter } from "react-router";
import App from './components/App.tsx';

function RouterComp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterComp;