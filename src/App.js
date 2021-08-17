import './App.css';
import AuthProvider from './components/AuthProvider';
import NetoSocial from './components/NetoSocial';

function App() {
  return (
    <AuthProvider>
      <NetoSocial />
    </AuthProvider>
  );
}

export default App;
