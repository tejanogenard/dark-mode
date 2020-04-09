
import { useState } from "react";

const useLocalStorage = ( key, initialValue ) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get item from localStorage by key
    const item = window.localStorage.getItem(key);
    // If item is in local storage, parse and return stored JSON.
    // if undefined, return the initialValue
    return item ? JSON.parse(item) : initialValue;
  });  

  const setValue = (value) => {
    setStoredValue(value);   // Set state
    window.localStorage.setItem(key, JSON.stringify(value));    // Save to local storage
  };
  return [storedValue, setValue];
}
export default useLocalStorage;

