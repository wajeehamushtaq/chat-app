import React from 'react';
import ChatHome from "./components/ChatHome/ChatHome";
import Chats from "./components/ChatHome/Chats";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <main>
            <Switch>
                <Route path="/" component={ChatHome} exact />
                <Route path="/chat" component={Chats} />
                <Route component={Error} />
            </Switch>
        </main>
  );
}

export default App;
