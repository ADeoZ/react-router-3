import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function ToolbarProfile() {
  const { profile, handleLogout } = useContext(AuthContext);

  return (
    <div className="ToolbarProfile">
      <div className="ToolbarProfile__name">
        Hello, {profile.name}
      </div>
      <div className="ToolbarProfile__avatar">
        <img src={profile.avatar} alt={profile.name} />
      </div>
      <div className="ToolbarProfile__logout">
        <button className="ToolbarProfile__button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}