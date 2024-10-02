import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import './styles/main.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState<any>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(response => response.json())
      .then(data => {
        const userList = data.map((user: any) => ({
          username: user.username,
          email: user.email
        }));
        setUsers(userList);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      <div className={`App`}>
        <div>
          <a href="#" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 id="HPTitle">HP React App</h1>
        <div className="card">
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </div>
        <div className='allowed-card'>
          Allowed list:
          <ul>
            {users.map((user: any, index: any) => (
              <li className='allowed-user' key={index}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
