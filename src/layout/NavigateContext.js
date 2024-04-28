import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateContext = React.createContext();

const NavigateProvider = ({ children }) => {
  const navigate = useNavigate();
  return (
    <NavigateContext.Provider value={navigate}>
      {children}
    </NavigateContext.Provider>
  );
};

export { NavigateProvider };
export default NavigateContext;
