import { useContext } from 'react';
import { HiddenContext } from '../context/HiddenContext';

export function useHiddenContext() {
  const context = useContext(HiddenContext);

  if (!context) {
    throw Error(
      'useHiddenContext must be used inside an HiddenContextProvider'
    );
  }

  return context;
}
