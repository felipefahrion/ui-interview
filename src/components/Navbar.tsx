
const Navbar = ({toggleTheme, isDarkMode}) => {
  return (
    <nav className='nav'>
      <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  )
}

export default Navbar