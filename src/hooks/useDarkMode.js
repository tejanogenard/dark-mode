
import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = (initialValue) => {

  const [ darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
      // if it's there, return that value
      // else, return the initialValue from the parameters
    (darkMode) ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  },[darkMode])
  
  return [darkMode, setDarkMode];

}
