import './App.css';
import AuthProvider from './components/AuthProvider';
import RouteWrapper from './components/RouteWrapper';

function App() {    
  return (
    <AuthProvider>
      <RouteWrapper />
    </AuthProvider>
  );
}

export default App;
