import React from 'react'
import iconMoon from '../../images/icon-moon.svg'
import iconSun from '../../images/icon-sun.svg'
import './DarkMode.scss'

export default function DarkMode({ darkMode, setDarkMode }) {
  const switchModes = mode => {
    if (mode === 'light') {
      setDarkMode(false)
    } else if (mode === 'dark') {
      setDarkMode(true)
    }
  }
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="darkmode__lightmode">
        {darkMode ? (
          <img
            src={iconSun}
            onClick={() => switchModes('light')}
            alt="iconSun"
          />
        ) : (
          <img
            src={iconMoon}
            onClick={() => switchModes('dark')}
            alt="iconMoon"
          />
        )}
      </div>
    </div>
  )
}
