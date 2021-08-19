import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import NewsList from './NewsList';
import NewsView from './NewsView';
import Page404 from './Page404';
import Welcome from './Welcome';

export default function RouteWrapper() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <div className="page">
        {token &&
          <Switch>
            <Route exact path="/">
              <Redirect to="/news" />
            </Route>
            <Route exact path="/news" component={NewsList} />
            <Route exact path="/news/:id" component={NewsView} />
            <Route component={Page404} />
          </Switch>
        }
        {!token &&
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        }
      </div>
    </Router>
  );
}