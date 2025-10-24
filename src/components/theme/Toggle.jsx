import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'
import './toggle.css'

const Toggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: isDarkMode ? '#4db5ff' : '#ffd700'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: isDarkMode ? 0 : 24
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <FiMoon className="toggle-icon" />
          ) : (
            <FiSun className="toggle-icon" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

export default Toggle
