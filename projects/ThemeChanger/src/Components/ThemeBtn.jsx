import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const ThemeBtn = () => {

    const {themeMode,lightTheme,darkTheme} = useTheme()

    const onchangeBtn = (e)=>{
        const status = e.currentTarget.checked

        if (status == true) {
            darkTheme()
        }else {
            lightTheme()
    }
    }

  return (
    <>
    
    <div className="btn">
        <label htmlFor="">
            <input type="checkbox"
                value={""}
                onChange={onchangeBtn}
                checked= {themeMode == "dark"}
            />
            <span>Theme</span>
        </label>
    </div>
    
    </>
  )
}

export default ThemeBtn
