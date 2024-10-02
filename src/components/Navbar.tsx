
const Navbar = ({switchTheme}) => {
  return (
    <nav className='nav'>
      <button onClick={switchTheme}>Toggle Night/Dark Mode</button>
      <p>Home</p>
      <p>Map</p>
      <p>Chart</p>
    </nav>
  )
}

export default Navbar