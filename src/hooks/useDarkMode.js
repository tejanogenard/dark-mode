// import { useLocalStorage } from './useLocalStorage';
// import { useEffect } from 'react';
// import useLocalStorage from './useLocalStorage'

// export const useDarkMode = (key, initialValue) => {
//     // capture the values inside of useLocalStorage
//     const [darkmode, setDarkMode] = useLocalStorage('dark-mode', initialValue)
//     //const [darkmode, setDarkMode] = useState('dark-mode')


//     useEffect(() => {

//   // do the logic to check for the value in localStorage
//     // if it's there, return that value
//     // else, return the initialValue from the parameters
//         if (localStorage.values === true) {
//             document.body.classList.add('dark-mode')
//             setDarkMode({
//               ...darkmode
  
//             })
//           } else {
//             document.body.classList.remove('dark-mode')

//           }





//     })
      



// return [darkmode, setDarkMode]

// }

import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = (initialValue) => {

  const [ darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {

    (darkMode) ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')

  },[darkMode])
  

  return [darkMode, setDarkMode];

}
