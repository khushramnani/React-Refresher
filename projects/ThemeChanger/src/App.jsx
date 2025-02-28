import { useEffect, useState } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import { ThemeProvider } from './Context/ThemeContext'


function App() {

    const [themeMode , setThemeMode] = useState("light")

    const lightTheme = ()=>{
      setThemeMode("light")
    }

    const darkTheme = ()=>{
      setThemeMode("dark")
    }

    useEffect(()=>{
      const removeClass = document.querySelector('html').classList.remove('light','dark')
      const addClass = document.querySelector('html').classList.add(themeMode)
      

    },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <h1 className='text-blue-500'>Helliio</h1>
      <ThemeBtn/>
      <Card/>
      </ThemeProvider>
    </>
  )
}

export default App
