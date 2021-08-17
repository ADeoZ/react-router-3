import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Toolbar from "./Toolbar";
import Welcome from "./Welcome";
import NewsList from './NewsList';

export default function NetoSocial() {
  const { token } = useContext(AuthContext);

  return (
    <div className="NetoSocial">
      <Toolbar />
      {!token && <Welcome />}
      {token && <NewsList />}
    </div>
  );
}