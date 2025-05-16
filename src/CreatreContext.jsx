import { createContext } from 'react';

const MyContext = createContext(); // You can pass a default value here
import { useState } from 'react';

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState({
	
	
  });

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
