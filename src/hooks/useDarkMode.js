import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
    // capture the values inside of useLocalStorage
    const [values, setValues] = useLocalStorage('dark-mode')


    useEffect(() => {

  // do the logic to check for the value in localStorage
    // if it's there, return that value
    // else, return the initialValue from the parameters
        if (localStorage.values === true) {
            document.body.classList.add('dark-mode')
          } else {
            document.body.classList.remove('dark-mode')
          }
    })

return [values, setValues]

}

