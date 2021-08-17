import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import News from './News';

export default function NewsList() {
  const { token } = useContext(AuthContext);

  const [data, loading] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <div className="NewsList">
      {loading && (<div className="NewsList__loading">Загрузка...</div>)}
      {!loading && data && (
        data.map((item) => <News key={item.id} data={item} />)
      )}
    </div>
  );
}