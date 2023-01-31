import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Landing from './Landing';
import CreatePost from './CreatePost';
import Bulletin from './Bulletin';

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}>
      </Route>
      <Route path="/createpost" component={CreatePost}>
      </Route>
      <Route path="/bulletin" component={Bulletin}>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
