import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import ToolbarForm from "./ToolbarForm";
import ToolbarProfile from './ToolbarProfile';

export default function Toolbar() {
  const { token, profile } = useContext(AuthContext);
  let homeLink = '/';
  if (token) {
    homeLink = '/news';
  }

  return (
    <div className="Toolbar">
      <Link to={homeLink} className="Toolbar__logo">Neto Social</Link>
      {!profile && <ToolbarForm />}
      {profile && <ToolbarProfile />}
    </div>
  );
}