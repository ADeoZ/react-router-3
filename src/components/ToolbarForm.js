import { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function ToolbarForm() {
  const { handleLogin } = useContext(AuthContext);
  const EMPTY_STATE = { login: '', password: '' };
  const [form, setForm] = useState(EMPTY_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(form);
    setForm(EMPTY_STATE);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="ToolbarForm" onSubmit={handleSubmit}>
      <input className="ToolbarForm__login" name="login" value={form.login} onChange={handleChange} placeholder="Username" required />
      <input className="ToolbarForm__password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button className="ToolbarForm__button">Login</button>
    </form>
  );
}