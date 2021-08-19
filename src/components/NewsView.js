import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import NetoSocial from './NetoSocial';
import News from "./News";
import Page404 from './Page404';

export default function NewsView({ match }) {
  const { token } = useContext(AuthContext);

  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}news/${match.params.id}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    (!error &&
      (<NetoSocial>
        <div className="NewsView">
          {loading && (<div className="NewsView__loading">Загрузка...</div>)}
          {!loading && data && (
            <News data={data} />
          )}
        </div>
      </NetoSocial>)
    )
    ||
    (error && <Page404 />)
  )
}