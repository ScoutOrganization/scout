import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing'; 
import CreatePost from './CreatePost'; 
import Bulletin from './Bulletin'; 
export default function App() {

    return (
      <Switch>
        <Route path="/" component={<Landing />} />
        <Route path="/createpost" component={<CreatePost />} />
        <Route path="/bulletin" component={<Bulletin />} />
      </Switch>
    )
};