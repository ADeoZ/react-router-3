import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import NetoSocial from "./NetoSocial";
import News from './News';

export default function NewsList() {
  const { token } = useContext(AuthContext);

  const [data, loading] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <NetoSocial>
      <div className="NewsList">
        {loading && (<div className="NewsList__loading">Загрузка...</div>)}
        {!loading && data && (
          data.map((item) =>
            <Link
              className="NewsList__link"
              key={item.id}
              to={`/news/${item.id}`}
            >
              <News data={item} />
            </Link>)
        )}
      </div>
    </NetoSocial>
  );
}