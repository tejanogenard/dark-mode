import { useState } from 'react';

export const useLocalStorage = (key, initalValue) => {
    //GOAL: build this to be able to replace "useState" anywhere we want to persist any state data to localStorage
    //setup a state property
    //check to see if value is in local storage
    //if not, set the value to localStorage

    const [storedValue, setStoredValue] = useState(() =>{
        //logic to check for the value
        //get from local storage key 
        const item = window.localStorage.getItem(key)
        //Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item): initalValue;
    })




    
    const setValue = value => {
        //save state
        setStoredValue(value)
        //Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }


    return [storedValue] // returning state
}
