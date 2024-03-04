import React from 'react'
import Navigation from './components/NavigationBar/navigation'  
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Activity from './pages/Activity';
import Chats from './pages/chats';
import Events from './pages/events';
import MyAccount from './pages/myAccount';
import UsrAccounts from './pages/userAccounts';
function App() {
  return (
    <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/chats" element={<Chats/>}/>
                <Route path="/events" element={<Events />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/users-accounts" element={<UsrAccounts />} />
            </Routes>
        </Router>
  );
}

export default App;
