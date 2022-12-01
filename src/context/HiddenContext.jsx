import { createContext, useState } from 'react';

export const HiddenContext = createContext();

export function HiddenContextProvider({ children }) {
  const [hidden, setHidden] = useState(false);

  return (
    <HiddenContext.Provider value={{ hidden, setHidden }}>
      {children}
    </HiddenContext.Provider>
  );
}
