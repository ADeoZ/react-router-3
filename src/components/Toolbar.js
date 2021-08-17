import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import ToolbarForm from "./ToolbarForm";
import ToolbarProfile from './ToolbarProfile';

export default function Toolbar() {
  const { profile } = useContext(AuthContext);

  return (
    <div className="Toolbar">
      <div className="Toolbar__logo">Neto Social</div>
      {!profile && <ToolbarForm />}
      {profile && <ToolbarProfile />}
    </div>
  );
}