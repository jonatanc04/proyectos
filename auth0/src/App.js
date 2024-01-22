import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Profile from './comps/Profile';
import LoginButton from './comps/LoginButton';
import LogoutButton from './comps/LogoutButton';
import Loading from './comps/Loading';

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      <h1> USE OF AUTH0 </h1>
      {
        isAuthenticated ? <> <LogoutButton /> <Profile /> </> : <LoginButton />
      }
      
    </div>
  );
}

export default App;
